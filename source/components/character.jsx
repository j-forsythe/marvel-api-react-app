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
      <li onClick={this.toggleModal} className="char-card">
        <h2>{this.props.name}</h2>
        <img src={`${this.props.thumbnail.path}/standard_medium.${this.props.thumbnail.extension}`} alt={`${this.props.name} Image`} />

        {this.state.showModal ?
          <Modal dismiss={this.toggleModal}
            modalClassName='character-modal'>
            <h3>{this.props.name}</h3>
            <div className="char-info">
              <img src={`${this.props.thumbnail.path}/portrait_fantastic.${this.props.thumbnail.extension}`}  alt={`${this.props.name} Image`}/>
              <p className="char-description">{!this.props.description ? "no description" : this.props.description}</p>
            </div>
            <ul className="char-links">
              <li><a href={this.props.urls[0].url} target="_blank">More Details</a></li>
              {this.props.urls[1] ?  <li><a href={this.props.urls[1].url} target="_blank">Wiki Page</a></li> : "" }
              {this.props.urls[2] ?  <li><a href={this.props.urls[2].url} target="_blank">Comics</a></li> : "" }
            </ul>

          </Modal>
          : ''}

        </li>
      )
    }
  }

  module.exports = Character;
