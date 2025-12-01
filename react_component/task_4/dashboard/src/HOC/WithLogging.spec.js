import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import WithLogging from './WithLogging'

class MockApp extends React.Component {
  render () {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    )
  }
}

let consoleSpy

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation()
})

afterEach(() => {
    consoleSpy.mockRestore()
    cleanup()
})

test('check that the WithLogging HOC renders a heading element with the text Hello from Mock App Component', () => {
    const TestWithLogging = WithLogging(MockApp)
    render(<TestWithLogging />)

    expect(screen.getByRole('heading', {level: 1, name: /hello from mock app component/i})).toBeInTheDocument()
})
