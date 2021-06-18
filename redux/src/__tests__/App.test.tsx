import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import AppProviders from 'context'

test('Render <App />', async () => {
  const { container } = render(<App />, { wrapper: AppProviders })

  expect(screen.getByText(/loading/i)).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
