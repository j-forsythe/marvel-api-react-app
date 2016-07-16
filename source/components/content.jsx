import React, { PropTypes } from 'react';

import Api from './api.jsx';
import Character from './character.jsx';

class Content extends React.Component{

  render() {
    const mapMarvelData = this.props.marvelData.map((el)=>{
      return (
        <Character key={el.id} name={el.name} thumbnail={el.thumbnail} description={el.description} urls={el.urls}></Character>
      )
    });
    return (
      <ul className="char-list">
        {mapMarvelData}
      </ul>

    );
  }

}

module.exports = Content;
