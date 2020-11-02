const express = require('express'),
    app = express(),
    ctrl = require('./controller.js'),
    port = 4040;

app.use(express.json());

app.get("/api/adventurers", ctrl.getAdventurers);
app.get("/api/adventurers/:id", ctrl.getAdventurer);
app.get("/api/party", ctrl.identifyParty);
app.post("/api/adventurers", ctrl.addAdventurer)
app.post("/api/party/:id", ctrl.addAdventurerToParty);
app.put("/api/party/:index", ctrl.editName);
app.delete("/api/party/:index", ctrl.removeFromParty);

app.listen(port, () => console.log(`Server listening on port ${port}`));