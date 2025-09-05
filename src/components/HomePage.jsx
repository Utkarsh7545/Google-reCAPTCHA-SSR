import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const HomePage = ({ onLogout }) => {
  return (
    <div className="home-page">
      <Header onLogout={onLogout} />
      <MainContent />
      <Footer />
    </div>
  )
}

export default HomePage
