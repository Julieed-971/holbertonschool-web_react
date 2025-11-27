import './Notifications.css'
import NotificationItem from './NotificationItem'
import closeButton from '../assets/close-button.png'

function Notifications({ notifications = [], displayDrawer = false }) {
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
                                    />
                                ))}
                            </ul>
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
                        </>
                    )}


                </div>
            )}
        </>
    )
}

export default Notifications
