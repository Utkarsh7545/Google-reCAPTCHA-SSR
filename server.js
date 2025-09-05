import fs from 'node:fs/promises'
import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000

const app = express()

// Setup Vite for development
const { createServer } = await import('vite')
const vite = await createServer({
  root: __dirname,
  server: { middlewareMode: true },
  appType: 'custom'
})

// ✅ Attach Vite middlewares first
app.use(vite.middlewares)

// ✅ Handle only HTML/SSR requests
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl

    // 1. Load index.html
    let template = await fs.readFile(resolve(__dirname, 'index.html'), 'utf-8')

    // 2. Apply Vite HTML transforms (injects HMR, etc.)
    template = await vite.transformIndexHtml(url, template)

    // 3. Load server entry
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

    // 4. Render app
    const rendered = await render(url)

    // 5. Inject app into template
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    vite.ssrFixStacktrace(e)
    console.error(e.stack)
    res.status(500).end(e.stack)
  }
})

app.listen(port, () => {
  console.log(`✅ Server started at http://localhost:${port}`)
})
