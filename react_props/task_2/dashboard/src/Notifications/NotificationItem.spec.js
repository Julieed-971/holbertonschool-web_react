import { render, screen } from '@testing-library/react'
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
