import React, { Component } from "react";

class PartyAdventurers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: props.adventurers.name,
      editToggler: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.editToggler = this.editToggler.bind(this);
  }

  handleChange(e) {
    return this.setState({ newName: e.target.value });
  }

  editToggler() {
    return this.setState({ editToggler: !this.state.editToggler });
  }

  render() {
    const { adventurers, index, removeFromParty, editName } = this.props;
    const { newName, editToggler } = this.state;
    return (
      <div>
        <li className="adventurers-in-party">
          <p
            className="minus"
            onClick={(e) => {
              e.stopPropagation();
              removeFromParty(index);
            }}
          >
            {"-"}
          </p>
          {editToggler ? (
            <input value={newName} onChange={this.handleChange} />
          ) : (
            <h1>Name: {adventurers.name}</h1>
          )}
          {editToggler ? (
            <span>
              <button className="save"
                onClick={() => {
                  editName(index, newName);
                  this.editToggler();
                }}
              >
                Save
              </button>
              <button className="cancel"
                onClick={() => {
                  this.setState({ name: adventurers.name });
                  this.editToggler();
                }}
              >
                Cancel
              </button>
            </span>
          ) : null}
          <button className="edit" onClick={this.editToggler}>Edit</button>
          <h2>Race: {adventurers.race}</h2>
          <h2>Role: {adventurers.role}</h2>
          <h2>Age: {adventurers.age}</h2>
          <h2>Size:{adventurers.size}</h2>
          <h3>
            Attacks: {adventurers.attacks[0]}, {adventurers.attacks[1]},{" "}
            {adventurers.attacks[2]}
          </h3>
        </li>
      </div>
    );
  }
}

export default PartyAdventurers;
