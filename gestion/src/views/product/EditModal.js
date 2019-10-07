import React, { } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import PersonForm from '../../components/PersonForm/index'
//import styles from './familyManagement.module.scss'

export default function AddModal(props) {

  function showEditModal() {
    props.showEditModalProps()
  }

  return (

    <Modal isOpen={props.editModal} toggle={showEditModal} size="lg">
      <ModalHeader toggle={showEditModal}>Editar familiar: </ModalHeader>
      <ModalBody>
        
      </ModalBody>
      <ModalFooter>
        <Button color="primary" /*onClick={handleEditFamiliar}*/ onClick={showEditModal} >Ok</Button>{' '}
        <Button color="neutral" onClick={showEditModal}>Cancel</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}


