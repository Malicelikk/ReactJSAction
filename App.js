import React, { Component } from 'react';
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import './App.css';
import Users from './components/Users';

class App extends Component {

  render() {

    return (
      <div className="container">
        <Navbar title="Navbar Componenti Title" />
        <hr />
        <AddUser />
        <Users />
      </div>
    );
  }
}
export default App;
