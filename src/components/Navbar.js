import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {

    return (
        <Nav
            activeKey="/"
        >
            <Nav.Item>
                <Nav.Link href="/">Lista de reportes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/report">Crear Reporte</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/evento/asistencia">Ingresar Asistencia</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/evento/asistencias">Asistencias de Evento</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/estudiante/eventos">Eventos estudiante</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;