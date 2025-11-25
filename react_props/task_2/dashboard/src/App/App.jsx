import './App.css'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'

function App() {

  const notificationsList = {id, type, value}
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="root-header">
        <Header />
      </div>
      <div className="root-login">
      <Login />
      </div>
      <div className="root-footer">
        <Footer />
      </div>
    </>
  )
}

export default App
