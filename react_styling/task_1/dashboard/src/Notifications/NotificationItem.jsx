import { PureComponent } from 'react'
import { getLatestNotification } from '../utils/utils'

class NotificationItem extends PureComponent {
    static defaultProps = {
        markAsRead: () => {},
        type: "default",
        html: "",
        value: "",
        id: 1
    }

    render() {
        const { markAsRead, type, html, value, id } = this.props
        const colors = {
                urgent: "red",
                default: "blue"
            }
        const color = colors[type]
        const innerHtml = { __html: getLatestNotification() }
        if (type === "default")
            return (
                <li onClick={() => markAsRead(id)}
                    data-notification-type={type}
                    style={{ color }}>
                    {value}
                </li>
            )
        else if (type === "urgent" && html) {
            return (
                <li
                    onClick={() => markAsRead(id)}
                    data-notification-type={type}
                    dangerouslySetInnerHTML={innerHtml}
                    style={{ color }}>
                </li>
            )
        }
        else if (type === "urgent") {
            return (
                <li
                    onClick={() => markAsRead(id)}
                    data-notification-type={type}
                    style={{ color }}
                >
                    {value}
                </li>
            )
        }
    }
}
export default NotificationItem
