const Footer = () => {
  return (
    <footer className="custom-footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>UX4G Demo App</h5>
            <p>A demonstration of UX4G framework with React SSR.</p>
          </div>
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Support</h6>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#api">API Reference</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">© 2024 UX4G Demo App</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
