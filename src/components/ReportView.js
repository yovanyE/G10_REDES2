import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router-dom";


const ReporView = () => {
    const  baseURL = process.env.REACT_APP_SERVER || "http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000";
    const { id } = useParams();
    

    const history = useHistory();
    const [form, setForm] = useState({
        "carne": id,
        "name": "",
        "course": "",
        "bodyMessage": "",
        "dateTime": "",
        "processBy": ""
    });
    const fetchApi = async () => {
        const response = await fetch(baseURL+'/getOne/'+id);
    
        const responseJSON = await response.json();
        const data = responseJSON.message.result[0];
        const processByGet = responseJSON.message.processByGet;
        setForm({
            ...data,
            processByGet,
        });
           
      }
      useEffect(() => {
        fetchApi();
      }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = () => {
        const baseURL = process.env.REACT_APP_SERVER
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
                <h2>Informacion del reporte</h2>
            </Row>
            <Row>
                <Form
                    noValidate
                >
                    <Form.Group className="mb-3" controlId="carnet">
                        <Form.Label>Carnet</Form.Label>
                        <Form.Control placeholder="#########" 
                            disabled
                            name="carne"
                            value={form.carne}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="" 
                            disabled
                            name="name"
                            value={form.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="curso">
                        <Form.Label>Curso/proyecto</Form.Label>
                        <Form.Control placeholder="" 
                            disabled
                            name="course"
                            value={form.course}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cuerpo">
                        <Form.Label>Cuerpo del reporte</Form.Label>
                        <Form.Control as="textarea" rows={3} 
                            disabled
                            name="bodyMessage"
                            value={form.bodyMessage}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control placeholder="" 
                            disabled
                            name="dateTime"
                            value={form.dateTime}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="curso">
                        <Form.Label>Ingresado por</Form.Label>
                        <Form.Control placeholder="" 
                            disabled
                            name="processBy"
                            value={form.processBy}
                        />
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <h3>
                    {form.processByGet}
                </h3>
            </Row>
        </Container>
    )
}

export default ReporView;