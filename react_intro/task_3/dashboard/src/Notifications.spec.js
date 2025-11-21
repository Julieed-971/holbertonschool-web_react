import { render, screen, fireEvent } from '@testing-library/react'
import Notifications from './Notifications'

test('Renders the notifications title', () => {
    render(<Notifications />)
    expect(screen.getByText(/^here is the list of notifications$/i)).toBeInTheDocument()
})

test('Renders a button in the notifications', () => {
    render(<Notifications />)
    expect(screen.getByRole('button')).toBeInTheDocument()
})

test('Renders exactly 3 li elements', () => {
    render(<Notifications />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
})

test('Clicking the close button logs Close button has been clicked to the console', () => {
    render(<Notifications />)
    console.log = jest.fn()
    fireEvent.click(screen.getByRole('button'))
    expect(console.log).toHaveBeenCalledWith("Close button has been clicked")
})
