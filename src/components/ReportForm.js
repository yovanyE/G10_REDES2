import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ReportForm = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        "carne": "",
        "name": "",
        "course": "",
        "bodyMessage": ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = () => {
        const baseURL = process.env.REACT_APP_SERVER || "http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000";
        axios.post(baseURL + "/addReport", form).then(res => {
            if(res.status === 200 && res.data) {
                console.log(res.data);
                history.push("/");
            } else {
                console.log("Error");
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <Container>
            <Row>
                <h2>Ingreso de reportes de practicantes</h2>
            </Row>
            <Row>
                <Form
                    noValidate
                >
                    <Form.Group className="mb-3" controlId="carnet">
                        <Form.Label>Carnet</Form.Label>
                        <Form.Control placeholder="#########" 
                            name="carne"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="" 
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="curso">
                        <Form.Label>Curso/proyecto</Form.Label>
                        <Form.Control placeholder="" 
                            name="course"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cuerpo">
                        <Form.Label>Cuerpo del reporte</Form.Label>
                        <Form.Control as="textarea" rows={3} 
                            name="bodyMessage"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button onClick={handleSubmit}>
                        Enviar Reporte
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default ReportForm;