import React, { PropTypes } from 'react'
import ReactGA from 'react-ga'
import Api from './api.jsx'

export default class Home extends React.Component {

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
          <a href="http://marvel.com" id="copy" target="_blank">Data provided by Marvel. &copy; 2016 MARVEL</a>
          <a  href="https://github.com/j-forsythe/marvel-api-react-app"
              target="_blank"
              onClick={()=>{this._handleClick()}}>
                View the Code
          </a>
        </footer>
      </section>
    )
  }

  _handleScroll() {
    window.scrollTo(0,0);
  }

  _handleClick() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked GitHub link'
    })
  }
}
