import { getLatestNotification } from '../utils/utils'

function NotificationItem({ type = "default", html = "", value = "" }) {
    const colors = {
        urgent: "red",
        default: "blue"
    }
    const color = colors[type]
    const innerHtml = {__html: getLatestNotification()}
    if (type === "default")
        return (
            <li 
                data-notification-type={type} 
                style={{ color }}>
                {value}
            </li>
        )
    else if (type === "urgent" && html) {
        return (
            <li 
            data-notification-type={type} 
            dangerouslySetInnerHTML={innerHtml}
            style={{ color }}>
            </li>
        )
    }
    else if (type === "urgent"){
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
