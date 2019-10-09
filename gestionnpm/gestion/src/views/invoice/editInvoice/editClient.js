import React, { useState } from 'react';
import { Container, Row, Col, Label, Input, FormGroup } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


export default function Editclient(props) {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState();
    const [nie, setNie] = useState();
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
  
    const values = {
      nombre: name,
      apellidos: surname,
      cif: nie,
      localidad: location,
      direccion: address,
      telefono: phone,
      email: mail
    };

    function showEditModal(){
        props.showEditModalProps()
    }

    return (
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <FormGroup>
                    <Col>
                        <Label >Nombre: <Input onChange={e => setName(e.target.value)} id="name" type="text"/></Label>{' '}
                        <Label>Apellidos: <Input onChange={e => setSurname(e.target.value)} type="text" id="surname"/></Label>{' '}
                        <Label>NIF o NIE: <Input onChange={e => setNie(e.target.value)} type="text" id="nif"/></Label>{' '}
                    </Col>
                    <Col>
                        <Label>Localidad: <Input onChange={e => setLocation(e.target.value)}type="text" id="location" /></Label>{' '}
                        <Label>Dirección: <Input onChange={e => setAddress(e.target.value)}type="text" id="address"/></Label>{' '}
                        <Label>Teléfono: <Input onChange={e => setPhone(e.target.value)}type="text" id="tlf"/></Label>{' '}
                    </Col>
                    <Col>
                        {/*<Label>Fax: <Input type="text" id="nif" /></Label>{' '}*/}
                        <Label>Email: <Input onChange={e => setMail(e.target.value)} type="mail" id="mail"/></Label>{' '}
                    </Col>
                </FormGroup>
            </Row>
    )
}