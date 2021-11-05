import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Form, Button, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const EventsList = () => {
    const history = useHistory();
    //codigo para consumir api
    const url = process.env.REACT_APP_SERVER;
    const [data, setData] = useState({
        server: "",
        data: []
    });

    const [carne, setCarne] = useState("");

    const fetchApi = async () => {
        const response = await axios.get(url + '/getByCarne/' + carne);

        if (response) {
            setData({
                data: response.data.message,
                server: response.data.message && response.data.message.length > 0 ? response.data.message[0].processByGet : ""
            });
            console.log(response.data);
        }
    }

    // useEffect(() => {
    //     fetchApi();
    // }, []);

    //evento de boton 
    function darClick() {
        alert('hola mundo');
    }

    return (
        <Container>
            <Row>
                <h2>Eventos asistidos por estudiante</h2>
            </Row>
            <Row>
                <Form>
                    <Col md={6}>
                    <Form.Group className="mb-3" controlId="carnet">
                        <Form.Label>Carnet</Form.Label>
                        <Form.Control placeholder="#########" 
                            name="carne"
                            onChange={(e) => setCarne(e.target.value)}
                        />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Button onClick={fetchApi}>
                            Buscar
                        </Button>
                    </Col>
                </Form>
            </Row>
            <Row xs={1} md={3} className="g-4">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id Evento</th>
                            <th>Evento</th>
                            <th>Fecha</th>
                            <th>Servidor</th>
                            <th>Imagen</th>
                            {/* <th>Accion</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {!data.data ? 'cargando...' : data.data.map((todo, index) => (
                            <tr key={todo.idAsistencia}>
                                <td>{todo.evento}</td>
                                <td>{todo.fecha}</td>
                                <td>{todo.servidor}</td>
                                <td>{todo.imageURL}</td>
                                {/* <td>
                                    <Button onClick={() => history.push('/report/' + todo._id)}>
                                        Ver Reporte
                                    </Button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <h3>
                    {data.server}
                </h3>
            </Row>
        </Container>
    )

    /*return (
        <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                 texto que se agregara aca 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )*/
}

export default EventsList;
