import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'

test('renders 2 labels, 2 inputs and 1 button element', () => {
    const { container } = render(<Login />)
    
    const labels = container.querySelectorAll('label')
    expect(labels).toHaveLength(2)

    const inputs = container.querySelectorAll('input')
    expect(inputs).toHaveLength(2)

    expect(screen.getAllByRole('button')).toHaveLength(1)
})

test('inputs elements get focused whenever the related label is clicked', async () => {
    const user = userEvent.setup()
    render(<Login />)
    const emailLabel = screen.getByText('Email:').closest('label')
    const emailInput = screen.getByRole('textbox', {name: /^email:$/i})

    await user.click(emailLabel)

    expect(emailInput).toHaveFocus()

    const passwordLabel = screen.getByText('Password:').closest('label')
    const passwordInput = screen.getByLabelText(/^password:$/i)

    await user.click(passwordLabel)
    expect(passwordInput).toHaveFocus()
})