import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Text
} from 'react-native';

export default class ConfirmDeliverModal extends Component {
  render() {
    const { isShow } = this.props;

    return (
      <Modal
        animationType="slide"
        visible={isShow}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <Text>Confirm deliver</Text>
      </Modal>
    )
  }
}

ConfirmDeliverModal.propTypes = {
  isShow: PropTypes.bool
}