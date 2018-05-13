import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import test from './vendor/test.jpg';
import { Navbar, Jumbotron, Button , Col, Row, Grid, Glyphicon} from 'react-bootstrap';
import HomeView from './components/home.view'

class App extends Component {
  render() {
    return (
        <HomeView/>
    );
  }
}

export default App;
