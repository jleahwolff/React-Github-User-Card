import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/GitCard';
import Search from './components/SearchForm';

class App extends Component {
  super();
  this.state = {
    user: [],
    followers: []
  }
  
  componentDidMount() {
    axios
    .get('https://api.github.com/users/jleahwolff')
    .then( res => {
      console.log(res, `data`);
      this.setState({
        user: res.data
      })
    })
    .catch (err => console.log(err));
    
    axios
    .get('https://api.github.com/users/jleahwolff/followers')
    .then (res => {
      console.log(res.data, `followers`);
      this.setState({
        followers: res.data
      });
    })
    .catch(err => console.log(err));
  }
  
  
  
  function App() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
};
}

export default App;
