import React, { Component } from "react";

class AuthorInfo extends Component {
  componentDidMount() {
    console.log("AuthorInfo Loaded:", this.props.author);
  }

  render() {
    const { author, bio, topBooks } = this.props;

    return (
      <div className="card p-4 mt-4 shadow-sm">
        <h3>{author}</h3>
        <p>{bio}</p>

        <h5>Top Books:</h5>
        <ul>
          {topBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;
