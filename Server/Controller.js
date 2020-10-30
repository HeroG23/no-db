const partyList = require('./adventurers.json')
let party = [];

module.exports = {
    getAdventurer: (req, res) => {
        const {search} = req.query;
        const searchArray =[];
        if(search){
            const filteredAdventurers = partyList.filter(
                adventurer => adventurer.name.toLowerCase().includes(search.toLowerCase()));
            for(let i = 0; i < partyList.length; i++){
                if(filteredAdventurers[i]){
                    searchArray.push(filteredAdventurers[i]);
                }
            }
        }else{
            for(let i = 0; i < partyList.length; i++){
                searchArray.push(partyList[i]);
            }
        }
        return res.status(200).send(partyList);
    },
    getOneAdventurer: (req, res) => {
        const {id} = req.params;
        const locatedAdventurer = partyList.find(adventurer => adventurer.id === +id);
        if(!locatedAdventurer){
            return res.status(404).send("Could not find the adventurer in the party");
        }
        res.status(200).send(locatedAdventurer);
    },
    identifyParty: (req,res) =>{
        res.status(201).send(party);
    },
    addAdventurer: (req,res) => {
        
        const {name, race, role, age, size, attacks, id} = req.body;

        for(let i = 0; i < partyList.length; i++){
            if(id === partyList[i].id){
                return `Can't add that adventurer at ${id}`
            }
            else{
                let newAdventurer = {
                    id: id,
                    name: name,
                    race: race,
                    role: role,
                    age: age,
                    size: size,
                    attacks: attacks,
                }
                return newAdventurer
            }
        }
        partyList.push(newAdventurer)  
        res.status(200).send(partyList)
    },
    addAdventurerToParty: (req,res) => {
        const {id} = req.params;
        const foundAdventurer = {...partyList.find(adventurer => adventurer.id === +id)};

        party.push(foundAdventurer);
        res.status(200).send(party)
    },
    editName: (req,res) => {
        const {index} = req.params;
        const {name} = req.body;
        party[index].name = name;
        res.status(200).send(party)
    },
    removeFromParty: (req,res) => {
        const {index} = req.params;
        party.splice(index, 1);
        res.status(200).send(party)
    }
}