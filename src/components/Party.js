import React from "react";
import PartyAdventurers from "./PartyAdventurers";

function Party (props){
    const advArr = props.party.map((adventurers, index) => (
        <PartyAdventurers
            key={`${adventurers.id}-${index}`}
            adventurers = {adventurers}
            removeFromParty={props.removeFromParty}
            editName={props.editName}
            index={index}
        />
    ));
    return <ul className="party-list">{advArr}</ul>
}

export default Party;