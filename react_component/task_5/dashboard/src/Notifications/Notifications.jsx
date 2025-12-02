import './Notifications.css'
import React from 'react'
import NotificationItem from './NotificationItem'
import closeButton from '../assets/close-button.png'

class Notifications extends React.Component {
    shouldComponentUpdate(nextProps) {
        console.log(`Next props length: ${nextProps.notifications.length}`)
        if (nextProps.notifications.length !== this.props.notifications.length) {
            return true
        }
        return false
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    render() {
        const { displayDrawer = false, notifications = [] } = this.props
        return (
            <>
                <div className="notification-title">Your notifications</div>
                {displayDrawer && (
                    <div className="notification-items">
                        {notifications.length === 0 ? (
                            <p>No new notification for now</p>
                        ) : (
                            <>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {notifications.map((notification) => (
                                        <NotificationItem
                                            key={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            markAsRead={this.markAsRead}
                                            id={notification.id}
                                        />
                                    ))}
                                </ul>
                            </>
                        )}

                        <button style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            background: 'transparent',
                            border: 'none',
                            color: '#343434',
                            cursor: 'pointer',
                        }}
                            onClick={() => console.log("Close button has been clicked")}
                            aria-label='Close'>
                            <img src={closeButton} alt="close-button" />
                        </button>
                    </div>
                )}
            </>
        )
    }
}
export default Notifications
