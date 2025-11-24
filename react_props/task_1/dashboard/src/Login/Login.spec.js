import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'

test('renders 2 labels, 2 inputs and 1 button element and that inputs elements get focused whenever the related label is clicked', async () => {
    render(<Login />)
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('Password:')).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /^email:$/i})).toBeInTheDocument()
    expect(screen.getByLabelText(/^password:$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /^ok$/i})).toBeInTheDocument()
    const user = userEvent.setup()
    const emailLabel = screen.getByText('Email:').closest('label')
    const emailInput = screen.getByRole('textbox', {name: /^email:$/i})

    await user.click(emailLabel)

    expect(emailInput).toHaveFocus()

    const passwordLabel = screen.getByText('Password:').closest('label')
    const passwordInput = screen.getByLabelText(/^password:$/i)

    await user.click(passwordLabel)
    expect(passwordInput).toHaveFocus()
})
