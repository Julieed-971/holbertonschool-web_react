import { getLatestNotification } from '../utils/utils'

function NotificationItem({ type = "default", html = "", value = "" }) {
    const innerHtml = {__html: getLatestNotification()}
    if (type === "default")
        return (
            <li 
                data-notification-type={type} 
                style={{ color: "blue" }}>
                {value}
            </li>
        )
    else if (html) {
        return (
            <li 
            data-notification-type={type} 
            dangerouslySetInnerHTML={innerHtml}
            style={{ color: "red" }}>
            </li>
        )
    }
    else {
        return (
            <li 
            data-notification-type={type}
            style={{ color: "red" }}
            >
            {value}
            </li>
        )
    }
}

export default NotificationItem
