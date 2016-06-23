import React, { PropTypes } from 'react';
import Content from './content.jsx';

// var marvelUrl = 'http://gateway.marvel.com/v1/public/characters?ts=1466385136&apikey=edadab185618091e5b181eff999b775f&hash=a0dfe2e78f04eee9b80bd742c9c643b2&limit=20'

export default class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marvelData: [],
      marvelUrl: ''
    };

    this.apiCall = this.apiCall.bind(this);

  }

  apiCall() {
    var marvelUrlBase = 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=';
    var marvelUrlEnd = '&ts=1466385136&apikey=edadab185618091e5b181eff999b775f&hash=a0dfe2e78f04eee9b80bd742c9c643b2&limit=20';
    let fullURL = marvelUrlBase + this.refs.name.value + marvelUrlEnd;

    this.serverRequest = $.get(fullURL,
      function (response) {
        console.log(response);
        this.setState({
          marvelData: response.data.results,
        });
      }.bind(this));

      this.refs.name.value = '';
    }

    componentWillUnmount() {
      this.serverRequest.abort();
    }

    render() {
      return (
        <div>
          <input
            type="text"
            ref="name"
            />
          <input type="submit" onClick={this.apiCall} />
          <Content marvelData={this.state.marvelData} />
        </div>
      )
    }


  }
  Api.propTypes = { marvelData: React.PropTypes.arrayOf(React.PropTypes.string),
  };
