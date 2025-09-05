import { useState, useEffect } from "react"

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [captchaValue, setCaptchaValue] = useState("")
  const [ReCAPTCHA, setReCAPTCHA] = useState(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // ensures hydration consistency
    import("react-google-recaptcha").then((lib) => {
      setReCAPTCHA(() => lib.default)
    })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value)
    setCaptchaValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA")
      return
    }
    if (formData.email && formData.password) {
      console.log("Login successful:", formData)
      onLogin()
    } else {
      alert("Please fill all fields")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* email input */}
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-3 col-form-label">
          Email
        </label>
        <div className="col-sm-9">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      {/* password input */}
      <div className="mb-3 row">
        <label htmlFor="password" className="col-sm-3 col-form-label">
          Password
        </label>
        <div className="col-sm-9">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>
      </div>

      {/* Render ReCAPTCHA only after mount */}
      {isClient && ReCAPTCHA && (
        <div className="mb-3 row">
          <div className="col-sm-9 offset-sm-3">
            <ReCAPTCHA
              sitekey="6LdA178rAAAAAONPN2xc4KooDhnRSf3iHyiSxKj9"
              onChange={handleCaptchaChange}
            />
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-sm-9 offset-sm-3">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
