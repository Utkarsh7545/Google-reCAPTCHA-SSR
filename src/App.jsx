import { useState } from 'react'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <div className="login-wrapper">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header text-center">
                    <h3>Login to Your Account</h3>
                  </div>
                  <div className="card-body">
                    <LoginForm onLogin={handleLogin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <HomePage onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
