import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

export default function AddModal(props) {

  const [typeOfAdding, setTypeOfAdding] = useState(0)

  function showAddModal() {
    props.showAddModalProps()
  }

  return (
    <Modal isOpen={props.addModal} toggle={showAddModal} size="lg">
      <ModalHeader toggle={showAddModal}>Añadir cliente: </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Nombre: <Input /></Label>
          <Label>Apellidos: <Input /></Label>
          <Label>Nombre: <Input /></Label>
        </FormGroup>

        
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={showAddModal} >Ok</Button>{' '}
        <Button color="neutral" onClick={showAddModal}>Cancel</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}