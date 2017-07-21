import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {

  fetchData(url_){
    return new Promise(function(resolve, reject){
      fetch(url_)
        .then(res_ =>{
          if(!res_.ok){
            throw res_.ok;
          }
          return res_
        })
        .then(res_ => res_.json())
        .then(data=>{
          resolve(data);
        })
        .catch(()=>{
          reject();
        })
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      ListItem:{
        state: 0,
        items: {}
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.fetchData("https://api.github.com/search/repositories?q="+event.target.value+"&sort=stars&order=desc")
      .then(datas => {
        this.setState({
          ListItem:{
            state: 1,
            items:datas
          }
        })
      })
      .catch();

    this.setState({
      ListItem:{
        state: 2
      },
      textValue: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input className="App-input" onChange={this.handleChange} placeholder="input" />
        </div>

        <Todo
          data={this.state.ListItem}
        />
      </div>
    );
  }
}

export default App;
