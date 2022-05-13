import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders something', () => {
    render(<Home />)

    const heading = screen.getByText("Index Page")

    expect(heading).toBeInTheDocument()
  })
})