import { fireEvent, render, screen } from '@testing-library/react'
import NotificationItem from './NotificationItem'

test('when notification prop type is "default" renders blue color li element and proper data-notification attribute', () => {
    render(<NotificationItem 
        type="default"
        value="New course available"
        />)

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveStyle({ color: "rgb(0, 0, 255)" })
    expect(listItem).toHaveAttribute('data-notification-type', 'default')
})

test('when notification prop type is "urgent" renders red color li element and proper data-notification attribute', () => {
    render(<NotificationItem 
        type="urgent"
        />)

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveStyle({ color: "rgba(255, 0, 0, 1)" })
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent')
})

test('markAsRead prop is called whenever the click event is triggered', () => {
    const mockMarkAsRead = jest.fn()
    render(<NotificationItem 
        markAsRead={mockMarkAsRead}
        type="default"
        value="New course available"
    />)

    const listItem = screen.getByRole('listitem')
    fireEvent.click(listItem)
    expect(mockMarkAsRead).toHaveBeenCalledTimes(1)
})