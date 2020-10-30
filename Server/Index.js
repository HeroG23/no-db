const express = require('express'),
    app = express(),
    ctrl = require('./controller.js'),
    port = 4040;

app.use(express.json());

app.get("/api/adventurers", ctrl.getAdventurer);
app.get("/api/adventurers/:id", ctrl.getOneAdventurer);
app.post("/api/adventurers", ctrl.addAdventurer);
app.get("/api/party", ctrl.identifyParty);
app.post("/api/party/:id", ctrl.addAdventurerToParty);
app.put("/api/party/:index", ctrl.editName);
app.delete("/api/party/:index", ctrl.removeFromParty);

app.listen(port, () => console.log(`Server listening on port ${port}`));