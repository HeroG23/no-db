const partyList = require('./adventurers.json')
let party = [];

module.exports = {
    getAdventurers: (req, res) => {
        const {search} = req.query;
        const searchArray = [];
        if(search){
            const filteredAdventurers = partyList.filter(
                adventurers => adventurers.name.toLowerCase().includes(search.toLowerCase()));
            for(let i = 0; i < 20; i++){
                if(filteredAdventurers[i]){
                    searchArray.push(filteredAdventurers[i]);
                }
            }
        }else{
            for(let i = 0; i < 20; i++){
                searchArray.push(partyList[i]);
            }
        }
        return res.status(200).send(searchArray);
    },

    getAdventurer: (req, res) => {
        const {id} = req.params;
        const locatedAdventurer = partyList.find(adventurers => adventurers.id === +id);
        if(!locatedAdventurer){
            return res.status(404).send("Could not find the adventurer in the party");
        }
        res.status(200).send(locatedAdventurer);
    },

    identifyParty: (req,res) =>{
        res.status(200).send(party);
    },

    addAdventurer: (req,res) => {
        
        const {name, race, role, age, size, attacks, id} = req.body;

        for(let i = 0; i < 20; i++){
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
        const foundAdventurer = {...partyList.find(adventurers => adventurers.id === +id)};

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