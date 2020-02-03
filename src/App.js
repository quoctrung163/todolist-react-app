import React, { Component } from "react";
import "./styles.css";
import Table from "./Table";

class App extends Component {
  state = {
    chacracters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  removeCharacter = index => {
    const { chacracters } = this.state;
    this.setState({
      chacracters: chacracters.filter((chacracters, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
