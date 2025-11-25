import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'

test('renders 2 labels, 2 inputs and 1 button element', () => {
    const { container } = render(<Login />)
    
    const labels = container.querySelectorAll('label')
    expect(labels.length).toBe(2)

    const inputs = container.querySelectorAll('input')
    expect(inputs.length).toBe(2)

    expect(screen.getByRole('button', {name: /^ok$/i})).toBeInTheDocument()
})

test('inputs elements get focused whenever the related label is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Login />)
    const emailLabel = container.querySelector('label[for="email"]')
    const emailInput = screen.getByRole('textbox', {name: /^email:$/i})

    await user.click(emailLabel)

    expect(emailInput).toHaveFocus()

    const passwordLabel = container.querySelector('label[for="password"]')
    const passwordInput = screen.getByLabelText(/^password:$/i)

    await user.click(passwordLabel)
    expect(passwordInput).toHaveFocus()
})