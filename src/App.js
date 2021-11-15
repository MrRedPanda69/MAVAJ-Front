import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Proyects from './components/proyectos/Proyects';

import ProyectState from './context/proyects/proyectState';
import TareaState from './context/tareas/tareaState'

function App() {
  return (
    <ProyectState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/proyects" component={Proyects} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectState>
  );
}

export default App;
