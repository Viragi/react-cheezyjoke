import React, { Component } from 'react';
import Joke from './Joke';
class JokeList extends Component {
  render() {
    const Joke_list = this.props.jokes_list.map(a => <Joke joke={a} />);

    return (
      <div className=" JokeList">
        <ul>{Joke_list}</ul>
      </div>
    );
  }
}

export default JokeList;
