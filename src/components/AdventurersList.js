import React, {Component} from 'react'

class AdventurersList extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return (
            <div>
                <li 
                    className="adventurers"
                    onClick={()=> {
                        props.addAdventurerToParty(props.adventurers.id)
                }}>
                    <h1>{props.adventurers.name}</h1>
                    <h2>{props.adventurers.race}</h2>
                    <h2>{props.adventurers.role}</h2>
                    <h2>{props.adventurers.age}</h2>
                    <h2>{props.adventurers.size}</h2>
                    <h2>{props.adventurers.attacks}</h2>
                </li>

            </div>
        )
    }
}

export default AdventurersList
