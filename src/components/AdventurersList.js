import React from 'react'

function AdventurersList(props) {
        return (
            <div>
                <li 
                    className="adventurers-available"
                    onClick={()=> {
                        props.addAdventurerToParty(props.adventurers.id)
                    }}>
                    <h1>Name: {props.adventurers.name}</h1>
                    <h2>Race: {props.adventurers.race}</h2>
                    <h2>Role: {props.adventurers.role}</h2>
                    <h2>Age: {props.adventurers.age}</h2>
                    <h2>Height: {props.adventurers.size}</h2>
                    <h3 className="attacks"
                    >Attacks: {props.adventurers.attacks[0]}, {props.adventurers.attacks[1]}, {props.adventurers.attacks[2]}</h3>
                </li>
            </div>
        )
}

export default AdventurersList
