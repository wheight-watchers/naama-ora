const fs= require('fs')
const dataFromFile=fs.readFileSync('../../Client/file.json');
let data=JSON.parse(dataFromFile)
console.log(data)

async function getAllTheMeetings(){

}
async function getMeetingById(id){

}
async function addMeeting(meeting){

}
async function updateMeeting(id,meeting){

}
async function deleteMeeting(id){

}
module.exports={
    getAllTheMeetings,getMeetingById,addMeeting,updateMeeting,deleteMeeting
}