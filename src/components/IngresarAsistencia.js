import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const IngresarAsistencia = () => {
    const history = useHistory();
    const [form, setForm] = useState({
        "carne": "",
        "estudiante": "",
        "evento": "",
        "idevento": "",
        "namefile": "",
        "content": "",
    });

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const handleChange = (e) => {
        if (e.target.name === 'file') {
            //Obtener base 64
            if (e.target.files && e.target.files.length > 0) {
                console.log(e.target.files[0]);
                toBase64(e.target.files[0]).then(data => {
                    setForm({
                        ...form,
                        namefile: e.target.files[0].name,
                        content: data,
                    })
                    console.log(data);
                }).catch(err => {
                    console.log(err);
                })
            }

        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        }
    }

    const handleSubmit = () => {
        const baseURL = process.env.REACT_APP_SERVER
        console.log(baseURL);
        axios.post(baseURL + "/addAssistence", form).then(res => {
            if (res.status === 200 && res.data) {
                console.log(res.data);
                history.push("/evento/asistencias");
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
                <h2>Ingreso de asistencia</h2>
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
                            name="estudiante"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="curso">
                        <Form.Label>Evento</Form.Label>
                        <Form.Control placeholder=""
                            name="evento"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cuerpo">
                        <Form.Label>Id evento</Form.Label>
                        <Form.Control
                            name="idevento"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cuerpo">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button onClick={handleSubmit}>
                        Enviar Asistencia
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default IngresarAsistencia;