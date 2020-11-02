import React, { Component } from "react";
import AdventurersList from "./AdventurersList";
import axios from "axios";

class Adventurers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleAdventurers: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/adventurers")
      .then((res) => {
        this.setState({ possibleAdventurers: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let adventurersMap = [];
    adventurersMap = this.state.possibleAdventurers.map((adventurers) => {
      return (
        <AdventurersList
          adventurers={adventurers}
          key={adventurers.id}
          addAdventurerToParty={this.props.addAdventurerToParty}
        />
      );
    });
    return (
      <div>
        <ul className="adventurer-list">{adventurersMap}</ul>
      </div>
    );
  }
}

export default Adventurers;
