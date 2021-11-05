import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const ReporsList = () => {
  const history = useHistory();
  //codigo para consumir api
  const url = process.env.REACT_APP_SERVER || "http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000";;
  const [data, setData] = useState({
    server: "",
    data: []
  });

  const fetchApi = async () => {
    const response = await axios.get(url + '/getall');
    
    if(response) {
      const data = response.data.message.result;
      const server = response.data.message.processByGet;
      setData({
        data,
        server
      });
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

 //evento de boton 
   function darClick(){
     alert('hola mundo');
   }

  return (
    <Container>
      <Row>
        <h2>Listado de reportes enviados por los estudiantes</h2>
      </Row>
      <Row xs={1} md={3} className="g-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Carnet</th>
              <th>Nombre</th>
              <th>Proyecto</th>
              <th>Fecha</th>
              <th>Servidor</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {!data.data ? 'cargando...' : data.data.map((todo, index) => (
              <tr key={todo.idReport}>
                <td>{todo.carne}</td>
                <td>{todo.name}</td>
                <td>{todo.course}</td>
                <td>{todo.dateTime}</td>
                <td>{todo.processBy}</td>
                <td>
                  <Button onClick={() => history.push('/report/'+todo.carne)}>
                    Ver Reporte
                  </Button>
                </td>
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

export default ReporsList;
