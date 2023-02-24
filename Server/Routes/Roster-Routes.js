const express = require("express");

const router = express.Router();



const rosterControllers = require("../Controllers/Roster-Controllers");



//localhost:3002/player/get
router.get("/get", rosterControllers.getAllPlayers);

//localhost:3002/roster/update
router.post("/update", rosterControllers.addPlayer);

//localhost:3002/roster/get:id
router.get("/get/:id", rosterControllers.getByID);

//localhost:3002/roster/update/:id
router.put("/update/:id", rosterControllers.updatePlayer);

//localhost:3002/roster/delete/:id
router.delete("/delete/:id", rosterControllers.deletePlayer);

module.exports = router;