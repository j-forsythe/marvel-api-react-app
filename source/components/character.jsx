import React, { PropTypes } from 'react';
import Content from './content.jsx';
import Modal from './modal.jsx';


class Character extends React.Component{
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

  render () {
    return (
      <li onClick={this.toggleModal}>
        <h2>{this.props.name}</h2>
        <img src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`} alt={`${this.props.name} Image`} />

        {this.state.showModal ?
          <Modal dismiss={this.toggleModal}
                 modalClassName='character-modal'>
            <p>{this.props.name}</p>
            <img src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`}  alt={`${this.props.name} Image`}/>
            <p>{!this.props.description ? "no description" : this.props.description}</p>
            <ul>
              <li><a href={this.props.urls[0].url} target="_blank">More Details</a></li>
              <li><a href={this.props.urls[1].url} target="_blank">Wiki Page</a></li>
              <li><a href={this.props.urls[2].url} target="_blank">Comics</a></li>
            </ul>
          </Modal>
          : ''}

        </li>
      )
    }
  }

  module.exports = Character;