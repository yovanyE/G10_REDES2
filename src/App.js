import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReportForm from './components/ReportForm';
import ReporsList from './components/ReportsList';
import ReporView from './components/ReportView';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngresarAsistencia from './components/IngresarAsistencia';
import EventsList from './components/EventsList';
import AsistenciasEvento from './components/AsistenciasEvento';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path="/estudiante/eventos" component={EventsList} />
        <Route path="/evento/asistencias" component={AsistenciasEvento} />
        <Route path="/evento/asistencia" component={IngresarAsistencia} />
        <Route path="/report/:id" component={ReporView}></Route>
        <Route path="/report" component={ReportForm}></Route>
        <Route path="/" component={ReporsList}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;