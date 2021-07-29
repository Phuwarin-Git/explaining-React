
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar'
import { Route, Switch } from "react-router-dom";
import { classCom } from "./pages/classCom";
import { functional } from "./pages/functional";
import { hook } from "./pages/hook";
import { custom } from "./pages/custom";
import { Props } from "./pages/props";
import { state } from "./pages/state";
import { Fetch } from "./pages/fetch"
import { context } from "./pages/context";
import { styled } from "./pages/styled"


function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Class Component</Nav.Link>
            <Nav.Link href="/functional">Functional Component</Nav.Link>
            <Nav.Link href="/hook">Hook</Nav.Link>
            <Nav.Link href="/custom">Custom Hook</Nav.Link>
            <Nav.Link href="/Props">Props</Nav.Link>
            <Nav.Link href="/state">State</Nav.Link>
            <Nav.Link href="/Fetch">Fetch</Nav.Link>
            <Nav.Link href="/context">Context API</Nav.Link>
            <Nav.Link href="/styled">Styled Component</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/" component={classCom}></Route>
        <Route path="/functional" component={functional}></Route>
        <Route path="/hook" component={hook}></Route>
        <Route path="/custom" component={custom}></Route>
        <Route path="/Props" component={Props}></Route>
        <Route path="/state" component={state}></Route>
        <Route path="/Fetch" component={Fetch}></Route>
        <Route path="/context" component={context}></Route>
        <Route path="/styled" component={styled}></Route>
        <Route path="/:id">
          <p>Error 404 page not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
