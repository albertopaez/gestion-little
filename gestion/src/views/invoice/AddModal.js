import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import Step from '../../components/stepper'

export default function AddModal(props) {

  function showAddModal() {
    props.showAddModalProps()
  }

  return (
    <Modal isOpen={props.addModal} toggle={showAddModal} size="lg">
      <ModalHeader toggle={showAddModal}>Añadir artículos: </ModalHeader>
      <ModalBody>
        <Step />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" /*onClick={handleAddFamiliar}*/ onClick={showAddModal} >Ok</Button>{' '}
        <Button color="neutral" onClick={showAddModal}>Cancel</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}