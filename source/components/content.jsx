import React, { PropTypes } from 'react';

import Api from './api.jsx';

class Content extends React.Component{

  render() {
    return (
      <div>
      <ul>
        {this.props.marvelData.map((el, i)=>{
            return  <li key={i} >
              <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`}  />
              {el.name}
            </li>;
        })}
      </ul>
    </div>
    );
  }

}

module.exports = Content;
