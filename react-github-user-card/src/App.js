import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/GitCard';
// import Search from './components/SearchForm';

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };
  
  componentDidMount() {
    axios
    .get('https://api.github.com/users/jleahwolff')
    .then( res => {
      this.setState({
        user: res.data
      })
      console.log(res, `user data`)
    })
    .catch (err => console.log(err))
    .finally(  
    axios
    .get('https://api.github.com/users/jleahwolff/followers')
    .then ( res => {
      console.log(res.data, `followers`)
      this.setState({
        followers: res.data
      });
    })
    .catch( err => console.log(err))
    )
  }
  
  
  render() {
    console.log(this.state.user, `user`);
    return (
      <div className="App">
        <h1
          style={{
            width: '100%',
            background: 'black',
            color: 'white'
          }}>
            GITHUB USER DATA
          </h1>
          <Card user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
