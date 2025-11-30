import './App.css'
import React from 'react'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils'

class App extends React.Component  {
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
  }
  constructor(props) {
    super(props)
    
    this.state = {
      notificationsList: [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: { __html: getLatestNotification() }},
      ],
      coursesList: [
        {id: 1, name: "ES6", credit: 60},
        {id: 2, name: "Webpack", credit: 20},
        {id: 3, name: "React", credit: 40}
      ]
    }
  }

  handleLogout = (event) => {
      if (event.ctrlKey && event.key === "h") {
        alert('Logging you out')
        this.props.logOut()
      }
    }

  componentDidMount() {
    document.addEventListener("keydown", this.handleLogout)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleLogout)
  }

  render() {
    const { isLoggedIn = false } = this.props
    const { notificationsList, coursesList } = this.state

    return (
      <>
        <div className="root-notifications">
          <Notifications notifications={notificationsList}/>
        </div>
        <div className="root-header">
          <Header />
        </div>
        {isLoggedIn ? (
          <div className="root-courses">
            <CourseList courses={coursesList}/>
          </div>    
          ) : (
            <div className="root-login">
              <Login />
            </div>
          )
        }
        <div className="root-footer">
          <Footer />
        </div>
      </>
    )
  }
}
export default App
