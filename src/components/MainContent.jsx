const MainContent = () => {
  return (
    <main className="main-content">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="https://www.linkedhelper.com/blog/wp-content/uploads/2024/05/linkedhelper_carousel_amusment_park_realistic_with_pony_funny_7f5dd56e-e21b-4ee3-879d-cdef0b65e009_1.jpg" 
              className="d-block w-100" 
              alt="Welcome"
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://images.unsplash.com/photo-1504027973709-58986e840e79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8" 
              className="d-block w-100" 
              alt="Design"
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://www.huntervalleygardens.com.au/wp-content/uploads/2024/08/carousel_3.jpg" 
              className="d-block w-100" 
              alt="Responsive"
            />
          </div>
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleFade" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleFade" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Welcome to Your Dashboard</h2>
            <p className="lead">
              You have successfully logged into the UX4G demo application.
            </p>
            
            <div className="card mt-4">
              <div className="card-header">
                <h5>Recent Activity</h5>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex justify-content-between">
                    <span>Login Successful</span>
                    <span className="badge bg-success">Just now</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between">
                    <span>Profile Updated</span>
                    <span className="badge bg-primary">2 hours ago</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between">
                    <span>Email Verified</span>
                    <span className="badge bg-info">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5>Quick Stats</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Users:</span>
                  <strong>1,234</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Active Sessions:</span>
                  <strong>567</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Server Status:</span>
                  <span className="badge bg-success">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent
