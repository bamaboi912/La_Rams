const express = require("express");

const router = express.Router();



const rosterControllers = require("../Controllers/Roster-Controllers");



//localhost:3002/player/get
router.get("/get", rosterControllers.getAllPlayers);

//localhost:3002/player/update
router.post("/update", rosterControllers.addPlayer);

//localhost:3002/player/get:id
router.get("/get/:id", rosterControllers.getByID);

//localhost:3002/player/update/:id
router.put("/update/:id", rosterControllers.updatePlayer);

//localhost:3002/player/delete/:id
router.delete("/delete/:id", rosterControllers.deletePlayer);

module.exports = router;