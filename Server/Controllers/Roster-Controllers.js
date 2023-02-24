const Player = require("../Roster/RosterInformation")


const getAllPlayers = async (req,res,next) =>{
    let players;
    try{
        players = await Player.find();

    }catch(err){
        console.log(err);
    }
    if(!players){
        
        return res.status(404).json({message:"No players found"})
    }
    return res.status(200).json({players});
}


const getByID = async (req,res,next) =>{
    const id = req.params.id;
    let player;
    try{
        player = await Player.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!player){
        return res.status(404).json({message:"No player Found!"});

    }
    return res.status(200).json({player});
};


const addPlayer = async (req,res,next) =>{
    const{first_name, last_name, position, year_salary, years_in_the_league} = req.body;
    let person;
    try{
        person = new Player({
            first_name,
            last_name,
            position,
            year_salary,
            years_in_the_league
        });
        await person.save();
    }
    catch(err){
        console.log(err);
    }
    if(!person){
        return res.status(500).json({message: "Unable to Add Person"});
    }
    return res.status(201).json({person});
};


const updatePlayer = async (req,res,next) =>{
    const id = req.params.id;
    const {first_name, last_name, position, year_salary, years_in_the_league} = req.body;
    let player;
    try{
        player = await Player.findByIdAndUpdate(id,{
            first_name,
            last_name,
            position,
            year_salary,
            years_in_the_league
        });
        player = await player.save();
    }
    catch(err){
        console.log(err);
    }
    if(!player){
        return res.status(404).json({message: "Unable to update player by this ID"});
    }
    return res.status(200).json({player});
};



const deletePlayer = async (req,res,next) =>{
    const id = req.params.id;
    let player;
    try{
        player = await Player.findByIdAndRemove(id);
    }catch(err){
        console.log(err);

    }
    if(!player){
        return res.status(404).json({message:"Unable to delete player by this ID"});
    }
    return res.status(200).json({person: "Player Successfully Deleted"});
};


exports.getAllPlayers = getAllPlayers;
exports. getByID = getByID;
exports.addPlayer = addPlayer;
exports.updatePlayer = updatePlayer;
exports.deletePlayer = deletePlayer;