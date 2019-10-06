import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

export default function Invoice (){

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
    }
    ];

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' }
      };

    return(
        <Container>
            <Row>
                <Button>Agregar</Button>{' '}
                <Button>Modificar</Button>{' '}
                <Button>Eliminar</Button>
            </Row>
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
                        />
                    </div>
                    )
                }
            </ToolkitProvider>
            </Row>
        </Container>
    )
}