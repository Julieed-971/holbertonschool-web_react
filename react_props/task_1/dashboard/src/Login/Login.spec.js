import { render, screen } from '@testing-library/react'
import Login from './Login'

test('renders 2 labels, 2 inputs and 1 button element', () => {
    render(<Login />)
    expect(screen.getByLabelText('Email:')).toBeInTheDocument()
    expect(screen.getByLabelText('Password:')).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /^email:$/i})).toBeInTheDocument()
    expect(screen.getByLabelText(/^password:$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /^ok$/i})).toBeInTheDocument()
})