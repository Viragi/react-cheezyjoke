import React, { Component } from 'react';
import axios from 'axios';
import JokeList from './JokeList';

class App extends Component {
  state = {
    jokes: [],
    message: 'Loading....'
  };

  async componentDidMount() {
    try {
      let list = [];
      //this.setState({ jokes: [] });
      for (let i = 0; i < 20; i++) {
        const response = await axios.get(`https://icanhazdadjoke.com/`, {
          headers: { Accept: 'application/json' }
        });

        list = [...list, response.data.joke];
      }

      const l = list;
      this.setState({
        jokes: l,
        message: ''
      });
      //console.log(response.data.joke);
    } catch (e) {
      console.log(e);
    }
  }

  refreshJokes = evt => {
    this.setState({
      jokes: [],
      message: 'Loading....'
    });
    this.componentDidMount();
  };
  render() {
    return (
      <div className="App">
        {!this.state.message ? (
          <div>
            <JokeList jokes_list={this.state.jokes} />
            <button onClick={this.refreshJokes}> Click Me!</button>{' '}
          </div>
        ) : (
          <p>{this.state.message}</p>
        )}
      </div>
    );
  }
}

export default App;
