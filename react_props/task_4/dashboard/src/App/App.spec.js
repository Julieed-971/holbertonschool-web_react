import { render, screen } from '@testing-library/react'
import App from './App.jsx'

test('renders login and copyright paragraph with the correct content', async () => {
    render(<App />)
    expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
    expect(screen.getByText(/^copyright/i)).toBeInTheDocument()   
})

test('renders Email and Password label element', async () => {
    render(<App />)
    expect(screen.getByText(/^email:$/i)).toBeInTheDocument()
    expect(screen.getByText(/^password:$/i)).toBeInTheDocument()
})

test('renders the Login component when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />)
    expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
})

test('renders the CourseList component when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />)
    expect(screen.getByRole('table')).toBeInTheDocument()
})
