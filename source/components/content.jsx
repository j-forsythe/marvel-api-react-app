import React, { PropTypes } from 'react';
import Modal from './modal.jsx';

import Api from './api.jsx';

class Content extends React.Component{
  constructor() {
    super();
      this.state = {
        showModal: ''
      };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
  this.setState({showModal: !this.state.showModal})
}

  render() {
    return (
      <div>
      <ul>
        {this.props.marvelData.map((el, i)=>{
            return  <li key={i} >
              <a onClick={this.toggleModal}>
              <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`}  />
              {el.name}
              </a>
            </li>;
        })}
      </ul>
      {this.state.showModal ? <Modal dismiss={this.toggleModal} /> : ''}

    </div>
    );
  }

}

module.exports = Content;
