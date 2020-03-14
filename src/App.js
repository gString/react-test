import React from 'react'
import { hot } from 'react-hot-loader'

// lazyload/suspence example:
// const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  render() {
    return (
      <div role="main">
        <h1>Hello World</h1>
        {/*        
lazyload/suspence example: 
        {count > 5 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
 */}
      </div>
    )
  }
}

export default hot(module)(App)
