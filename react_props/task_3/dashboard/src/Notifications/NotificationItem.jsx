import { getLatestNotification } from '../utils/utils'

function NotificationItem({ type = "default", html = "", value = "" }) {
    const color = type === "default" ? "blue" : "red"
    const innerHtml = {__html: getLatestNotification()}
    if (type === "default")
        return (
            <li 
                data-notification-type={type} 
                style={{ color }}>
                {value}
            </li>
        )
    else if (html) {
        return (
            <li 
            data-notification-type={type} 
            dangerouslySetInnerHTML={innerHtml}
            style={{ color }}>
            </li>
        )
    }
    else {
        return (
            <li 
            data-notification-type={type}
            style={{ color }}
            >
            {value}
            </li>
        )
    }
}

export default NotificationItem
