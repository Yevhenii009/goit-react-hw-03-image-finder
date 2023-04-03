import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { largeImageURL, tags, webformatURL } = this.props.item;
    return (
      <>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={largeImageURL} tag={tags} />
        )}

        <li onClick={this.toggleModal} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={webformatURL}
            alt={tags}
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};