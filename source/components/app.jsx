import React, { PropTypes } from 'react'
import Api from './api.jsx'

const App = React.createClass({
  render () {
    return (
      <section>
      <header>
        <h1>Marvel</h1>
      <p>Character Search</p>
      </header>
      <Api />
    </section>
    )
  }
})

export default App
