import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
//import PersonForm from '../../components/PersonForm/index'
//import styles from './familyManagement.module.scss'

export default function AddModal(props) {

  const [typeOfAdding, setTypeOfAdding] = useState(0)

  function showAddModal() {
    props.showAddModalProps()
  }

  return (
    <Modal isOpen={props.addModal} toggle={showAddModal} size="lg">
      <ModalHeader toggle={showAddModal}>Añadir familiar: </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="exampleSelect">Seleccione el familiar a añadir: </Label>
          <Input type="select" name="select" id="exampleSelect" onChange={handleTypeOfAdding}>
            <option>Tutor 1 </option>
            <option>Tutor 2</option>
            <option>Hijo/a</option>
          </Input>
        </FormGroup>
        
      </ModalBody>
      <ModalFooter>
        <Button color="primary" /*onClick={handleAddFamiliar}*/ onClick={showAddModal} >Ok</Button>{' '}
        <Button color="neutral" onClick={showAddModal}>Cancel</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}