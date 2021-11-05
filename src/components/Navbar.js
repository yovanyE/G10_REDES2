import React from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    const redirigir = (path) => {
        history.push(path);
    }
    return (
        <Nav
            activeKey="/"
        >
            <Nav.Item>
                <Nav.Link onClick={() => redirigir("/")}>Lista de reportes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => redirigir("/report")} >Crear Reporte</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => redirigir("/evento/asistencia")}  >Ingresar Asistencia</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => redirigir("/evento/asistencias")} >Asistencias de Evento</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => redirigir("/estudiante/eventos")} >Eventos estudiante</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;