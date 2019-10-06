import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import AddModal from './AddModal';
import EditModal from './EditModal'

export default function Client (){

    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selected, setSelected] = useState(false);
    const [actRowIndex, setActRowIndex] = useState(false)
    const [inscribed, setInscribed] = useState([])

    function showAddModal(){
        setAddModal(!addModal)
    }

    function showEditModal(){
        if(selected){
            setEditModal(!editModal)
        } else {
            alert("Seleccione una fila")
        }
    }

    function handleSelected(){
        setSelected(!selected)
    }

    function handleDeleteF(id){
        var array = [...inscribed];
        for (let index = 0; index < inscribed.length; index++) {
          if (inscribed[index] === id) {
            var i = index;
          }
        }
        array.splice(i, 1);
        console.log("Eliminado")
    }

    const { SearchBar, ClearSearchButton } = Search;

    const columns = [{
    dataField: 'id',
    text: 'Client ID'
    }, {
    dataField: 'name',
    text: 'Client Name'
    }, {
    dataField: 'dni',
    text: 'DNI'
    },{
        dataField: 'address',
        text: 'Dirección'
    }];

    const products = [{
        id: 1,
        name: 'Juan García',
        dni: '27898755g'
    }, {
        id: 2,
        name: 'Juan Manuel',
        dni: '47324658k',
    }];

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' },
        onSelect: handleSelected
      };
    
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(`clicked on row with index: ${rowIndex}`);
            var rowI = rowIndex
            setActRowIndex(rowI)
            console.log("and rowIndex is: " + actRowIndex + "but RowI is: " + rowI);
        }
    }

    return(
        <Container>
            <Row>
                <Col xs={12}>
                    <AddModal showAddModalProps={showAddModal} addModal={addModal} /> {/*MODAL ADD FAMILIAR TO FAMILY UNIT*/}
                    <EditModal showEditModalProps={showEditModal} editModal={editModal} /> {/**MODAL EDIT SELECTED FAMILIAR */}
                    <Row >
                        <Col>
                            <Button onClick={showAddModal} style={{ marginLeft: "20px" }} >Añadir</Button>
                        </Col>
                        <Col >
                            <Button onClick={showEditModal} style={{ marginLeft: "10px" }} >Editar</Button>
                        </Col>
                        <Col >
                            <Button onClick={ () => handleDeleteF()} style={{ marginLeft: "10px" }} >Eliminar</Button>
                        </Col>
                    </Row>
                </Col>
            <Row>
                <ToolkitProvider
                    keyField="id"
                    data={ products }
                    columns={ columns }
                    search
                    >
                    {
                        props => (
                        <div>
                            <h3>Buscar:</h3>
                            <SearchBar { ...props.searchProps } />
                            <hr />
                            <BootstrapTable
                                { ...props.baseProps }
                                selectRow={ selectRow }
                                rowEvents={ rowEvents }
                            />
                        </div>
                        )
                    }
                </ToolkitProvider>
                </Row>
            </Row>
        </Container>
    )
}