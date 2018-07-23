import React, { Component } from 'react';
class Joke extends Component {
  state = {
    upvote: 0,
    downvote: 0
  };

  maintainlikeCount = () => {
    this.setState({
      upvote: this.state.upvote + 1
    });
  };

  maintainunlikeCount = () => {
    this.setState({
      downvote: this.state.upvote + 1
    });
  };

  render() {
    return (
      <div className="Joke">
        <li>
          {' '}
          {this.props.joke}
          <button name="like" onClick={this.maintainlikeCount}>
            <button name="unlike" onClick={this.maintainunlikeCount}>
              {' '}
              Like
            </button>
          </button>
        </li>
        <p>
          {' '}
          Upvote:{this.state.upvote} DownVote:{this.state.downvote}
        </p>
      </div>
    );
  }
}

export default Joke;
