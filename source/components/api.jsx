import React, { PropTypes } from 'react';
import Content from './content.jsx';
import ReactGA from 'react-ga';

export default class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marvelData: [],
    };

    this.apiCall = this.apiCall.bind(this);
  }

  apiCall(event) {
    event.preventDefault();
    let time = Date.now(),
        publicKey = 'edadab185618091e5b181eff999b775f',
        hashKey = '65807b0dbd26866524dcad83e9a4c231f1efc870';

    let sessionHash = time + hashKey + publicKey;

    var hash = md5(sessionHash);

    let marvelUrlEnd = `&limit=100&ts=${time}&apikey=${publicKey}&hash=${hash}`;
    var marvelUrlBase = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
    let $fullURL = marvelUrlBase + this.refs.name.value + marvelUrlEnd;

    //AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', $fullURL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      let apiData = JSON.parse(xhr.responseText);

      if (xhr.status === 200) {
        this.setState({
             marvelData: apiData.data.results,
           });
           console.log(apiData);
        if (apiData.data.total === 0) {
          alert('Character not found. Try again!');
        }
      }
      else {
        alert('Please enter a valid name');
      }
    }.bind(this);
    xhr.send();

      this.refs.name.value = '';
    }

    render() {
      return (
        <div className="form-wrapper">
          <form onSubmit={this.apiCall} className="user-input-form">
            <input
              type="text"
              ref="name"
              placeholder="Search by name or letter"
              className="search-input"
              />
            <input type="submit" className="search-submit" onClick={()=>{this._handleClick()}}/>
          </form>
          <Content marvelData={this.state.marvelData} />
        </div>
      )
    }

    _handleClick() {
      ReactGA.event({
        category: 'User',
        action: 'Submitted Query',
        label: `entered ${this.refs.name.value}`
      })
    }

  }
  Api.propTypes = { marvelData: React.PropTypes.arrayOf(React.PropTypes.string),
  };
