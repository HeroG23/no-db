const express = require('express');
const { addAdventurer } = require('./Controller.js');
const app = express();
const ctrl = require('./Controller.js');
const port = 4040;

app.use(express.json());

app.get('/api/adventurer', ctrl.getAdventurer);
app.get('/api/adventurer/:id', ctrl.getOneAdventurer);
app.get('/api/party', ctrl.identifyParty);
app.post('/api/party', ctrl.addAdventurer);
app.post('/api/party/id', ctrl.addAdventurerToParty);
app.put('/api/party/:index', ctrl.editName);
app.delete('/api/party/:index', ctrl.removeFromParty);

app.listen(port, () => console.log(`Server listening on port ${port}`));