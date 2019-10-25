import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Route, HashRouter, Switch, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/main/Main';
import Reasons from './components/reasons/Reasons';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <Nav>
          <Nav.Item>
            <Nav.Link>
              <Link to="/reasons">А за что?</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/reasons" component={Reasons} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
