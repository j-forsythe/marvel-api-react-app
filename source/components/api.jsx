import React, { PropTypes } from 'react';
import Content from './content.jsx';

export default class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marvelData: [],
      marvelUrl: ''
    };

    this.apiCall = this.apiCall.bind(this);

  }

  apiCall(event) {
    event.preventDefault();
    var marvelUrlBase = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
    var marvelUrlEnd = '&ts=1466385136&apikey=edadab185618091e5b181eff999b775f&hash=a0dfe2e78f04eee9b80bd742c9c643b2&limit=25';
    let $fullURL = marvelUrlBase + this.refs.name.value + marvelUrlEnd;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', $fullURL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      let apiData = JSON.parse(xhr.responseText);

      if (xhr.status === 200) {
        this.setState({
             marvelData: apiData.data.results,
           });
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
            <input type="submit" className="search-submit" />
          </form>
          <Content marvelData={this.state.marvelData} />
        </div>
      )
    }


  }
  Api.propTypes = { marvelData: React.PropTypes.arrayOf(React.PropTypes.string),
  };
