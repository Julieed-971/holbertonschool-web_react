import { render, screen, fireEvent } from '@testing-library/react'
import Notifications from './Notifications'
import { getLatestNotification } from '../utils/utils'

test('Renders the notifications title', () => {
    const notificationsList = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ]
    render(<Notifications notifications={notificationsList} displayDrawer={true}/>)
    expect(screen.getByText(/^here is the list of notifications$/i)).toBeInTheDocument()
})

test('Renders a button in the notifications', () => {
    render(<Notifications displayDrawer={true}/>)
    expect(screen.getByRole('button', { name: /^close$/i})).toBeInTheDocument()
})

test('Renders exactly 3 li elements', () => {
    const notificationsList = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ]
    
    render(<Notifications notifications={notificationsList} displayDrawer={true}/>)
    expect(screen.getAllByRole('listitem').length).toBe(3)
})

test('Clicking the close button logs Close button has been clicked to the console', () => {
    render(<Notifications displayDrawer={true}/>)
    console.log = jest.fn()
    fireEvent.click(screen.getByRole('button', { name: /^close$/i}))
    expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/^close button has been clicked$/i))
})

test('Only renders the notification-title when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />)
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument()

    expect(screen.queryByText(/^here is the list of notifications$/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /^close$/i})).not.toBeInTheDocument()
})

test('Renders p element, button and notifications item when displayDrawer is true', () => {
    const notificationsList = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ]
    render(<Notifications notifications={notificationsList} displayDrawer={true} />)

    expect(screen.getByText(/^here is the list of notifications$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^close$/i})).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toBe(3)
})

test('Renders p element, button and notifications item when displayDrawer is true', () => {
    const notificationsList = []
    render(<Notifications notifications={notificationsList} displayDrawer={true} />)

    expect(screen.queryByText(/^here is the list of notifications$/i)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^close$/i})).toBeInTheDocument()
    expect(screen.getByText(/^no new notification for now$/i)).toBeInTheDocument()
})