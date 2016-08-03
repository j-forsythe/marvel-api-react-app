import React, { PropTypes } from 'react'
import Api from './api.jsx'

const App = React.createClass({
  _handleScroll() {
    window.scrollTo(0,0);

  },
  render () {
    return (
      <section>
        <header>
          <h1>Marvel</h1>
          <p>Character Search</p>
        </header>
        <Api />
        <footer>
          <button onClick={this._handleScroll} className="scroll-top">&#8682;</button>
          <a href="http://marvel.com" id="copy">Data provided by Marvel. © 2016 MARVEL</a>
        </footer>
      </section>
    )
  }
})

export default App
