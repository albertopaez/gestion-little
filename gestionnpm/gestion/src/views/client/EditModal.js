import React, { useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { baseURL } from '../../constants';
import Swal from 'sweetalert2'

export default function EditModal(props) {

  const { data } = props;

  useEffect(() => {
    data && console.log("data pro props: ", data.id);
    data && setId(data.id);
    data && setName(data.nombre);
    data && setSurname(data.apellido);
    data && setNie(data.nie);
    data && setLocation(data.localidad);
    data && setAddress(data.direccion);
    data && setPhone(data.telefono);
    data && setMail(data.email);
  }, [data]);

  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState();
  const [nie, setNie] = useState();
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  function showEditModal() {
    props.showEditModalProps()
  }

  function submit() {
    const values = {
      nombre: name,
      apellidos: surname,
      nie: nie,
      localidad: location,
      direccion: address,
      telefono: phone,
      email: mail
    };

    axios.put(`${baseURL}/clientes/${id}`, values)
      .then(response => {
        console.log(response.data);
        setId("")
        setName("");
        setSurname("");
        setNie("");
        setLocation("");
        setPhone("");
        setMail("");
        Swal.fire({
          title: "Editado",
          text: "Cliente editado con éxito.",
          timer: 1000,
          type: "success",
          showConfirmButton: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (

    <Modal isOpen={props.editModal} toggle={showEditModal} size="lg">
      <ModalHeader toggle={showEditModal}>Modificar cliente: </ModalHeader>
      <ModalBody>
      <FormGroup>
          <Col>
            <Label >Nombre: <Input value={name} onChange={e => setName(e.target.value)} id="name" type="text"/></Label>{' '}
            <Label>Apellidos: <Input value={surname} onChange={e => setSurname(e.target.value)} type="text" id="surname"/></Label>{' '}
            <Label>NIF o NIE: <Input value={nie} onChange={e => setNie(e.target.value)} type="text" id="nif"/></Label>{' '}
          </Col>
          <Col>
            <Label>Localidad: <Input value={location} onChange={e => setLocation(e.target.value)} type="text" id="location"/></Label>{' '}
            <Label>Dirección: <Input value={address} onChange={e => setAddress(e.target.value)} type="text" id="address"/></Label>{' '}
            <Label>Teléfono: <Input value={phone} onChange={e => setPhone(e.target.value)}type="text" id="tlf"/></Label>{' '}
          </Col>
          <Col>
            <Label>Email: <Input value={mail} onChange={e => setMail(e.target.value)} type="text" id="mail"/></Label>{' '}
          </Col>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submit} >Ok</Button>{' '}
        <Button color="neutral" onClick={showEditModal}>Cancelar</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}


