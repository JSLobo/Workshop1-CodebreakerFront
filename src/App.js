import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state={
      number: ""
    }
    
  }

  render() {
    return (
      <div className="App">
        <input type="number" pattern="[0-9]*" value={this.state.name} onChange={this.updateNumber.bind(this)}/>
        <button onClick={this.game.bind(this)}>Adivinar</button>
      </div>
    );
  }

  updateNumber(event){
    this.setState({
      number: event.target.value
    });
  }
  game(){
    axios.get('https://codebreakertdd.herokuapp.com/api/codebreaker/' + this.state.number)
      .then(response => {
     // var res=JSON.parse(this.response);
      alert(response.data);
      console.log(response.data);
    })
      .catch(error =>{
      console.log(error);
    });
  }
}



export default App;
