import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header"
import Adventurers from "./components/Adventurers";
import Party from "./components/Party";
import axios from "axios";

class App extends Component {
  constructor(){
    super();

    this.state ={
      party: []
    }
    this.addAdventurerToParty = this.addAdventurerToParty.bind(this)
    this.editName = this.editName.bind(this)
  }

  componentDidMount(){
    axios.get("api/party")
    .then(res => {this.setState({party: res.data});
  }).catch(err => console.log(err));
  }

  addAdventurerToParty(id){
    axios.post(`/api/party/${id}`)
    .then(res => {
      this.setState({party: res.data});
    }).catch(err => console.log(err))
  }

  removeFromParty = (index) => {
    axios.delete(`/api/party/${index}`)
    .then(res => {
      this.setState({party: res.data});
    }).catch(err => console.log(err));
  }

  editName(index, name){
    axios.put(`/api/party/${index}`, {name})
    .then((res) =>{
      this.setState({party: res.data})
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <div className = "body">
          <Party 
            party = {this.state.party}
            removeFromParty = {this.removeFromParty}
            editName= {this.editName}
          />
          <Adventurers addAdventurerToParty = {this.addAdventurerToParty} />
        </div>
        <footer><strong>Adventure at your own risk!</strong></footer>
      </div>
    )
  }
}

export default App

