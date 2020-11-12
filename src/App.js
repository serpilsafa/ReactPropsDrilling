import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Users from './component/Users';

 class App extends Component {
  state = {
    users:
    [
        {
            id:1,
            name: "Serpil Safa",
            department: "IT",
            salary: "1000"
        },
        {
            id:2,
            name: "Seda Safa",
            department: "IT",
            salary: "5000"
        },
        {
            id:3,
            name: "Sedef Safa",
            department: "IT",
            salary: "7000"
        }
    ]
}
  render(){
    return (
      <div className="container">
        <Navbar title="User App"/>
        <hr/>
        <Users users = {this.state.users}/>
      </div>
    );
  }
}

export default App; 
