import React, {Component} from "react";
import AdventurersList from "./AdventurersList"
import axios from "axios"

class Adventurers extends Component{
    constructor(){
        super();
        this.setState ={
            possibleAdventurers: []
        }
        this.addAdventurer=this.addAdventurer.bind(this)
    }

    componentDidMount(){
        axios.get("/api/adventurers").then (res => {
            this.setState({possibleAdventurers: res.data})
        }).catch(err => console.log(err))
    }

    addAdventurer(){
        axios.post("api/adventurers")
        .then(res => {
            this.setState({possibleAdventurers: res.data})
        }).catch(err => console.log(err))
    }

    render(){
        let adventurersMap = [];
        adventurersMap = this.state.possibleAdventurers.map(adventurers => (
            <AdventurersList
                key={adventurers.id}
                adventurers = {adventurers}
                addAdventurerToParty={this.props.addToParty}
                addAdventurer={this.addAdventurer}
            />
        ))
        return (
            <div>
                <ul className="adventurer-list">{adventurersMap}</ul>
            </div>
        )
    }
}

export default Adventurers