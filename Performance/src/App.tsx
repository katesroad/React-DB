import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Spinner } from 'components/common/Spinner'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from 'components/common/ErrorBoundary'

/**
 * Add prefetch setting for code that user will load later
 * Doc: https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
 */
const HomeScreen = React.lazy(
  () => import(/* webpackPrefetch: true */ './screens/HomeScreen')
)
const AboutScreen = React.lazy(
  () => import(/* webpackPrefetch: true */ './screens/AboutScreen')
)

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </header>
      {/* 
        About:Route based code splitting
        Doc: https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
     */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            {/* Split code using React.lazy and React.Suspense */}
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" exact component={AboutScreen} />
          </Switch>
        </React.Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
