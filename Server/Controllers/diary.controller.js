const dairyService= require('../Services/diary.service')
module.exports.getDiary=async function(req,res,next){
    try{
        const allDiary=await dairyService.getDiary(req.params.userId);
        res.send(allDiary)
    }
    catch(error){
        next(error)
    }
}
module.exports.addDiary=async function(req,res,next){
    try{
        const diaryAdded=await dairyService.addDiary(req.params.userId,req.body);
        res.send(diaryAdded)
    }
    catch(error){
        next(error)
    }
}
module.exports.updateDiary=async function(req,res,next){
    try{
        const updateDairy=await dairyService.updateDiary(req.params.userId,req.params.dairyId,req.body);
        res.send(updateDairy)
    }
    catch(error){
        next(error)
    }
}
module.exports.deleteDairy=async function(req,res,next){
    try{
        const updateDairy=await dairyService.deleteDairy(req.params.userId,req.params.dairyId);
        res.send(updateDairy)
    }
    catch(error){
        next(error)
    }
}