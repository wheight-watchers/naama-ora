const fs= require('fs')
const dataFromFile=fs.readFileSync('../../Client/file.json');
let data=JSON.parse(dataFromFile)
console.log(data)

async function getDiary(userId){
    
}

async function addDiary(userId,diary){

}

async function updateDiary(userId,dairyId,dairy){

}
async function deleteDairy(userId,dairyId){

}
module.exports={
   getDiary, addDiary,updateDiary,deleteDairy
}