import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Spinner } from '../components/common/Spinner'

export const AppProviders: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spinner />}>
        <BrowserRouter>{children}</BrowserRouter>
      </React.Suspense>
    </BrowserRouter>
  )
}
