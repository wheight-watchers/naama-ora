

const MeetingService = require('../Services/meeting.service');

module.exports.getAllTheMeetings = async function (req, res, nex) {
    try {
        const meeting = await MeetingService.getAllTheMeetings();
        res.send(meeting)
    }
    catch (error) {
        next(error)
    }
}
module.exports.getMeetingById = async function (req, res, nex) {
    try {
        const meeting = await MeetingService.getMeetingById(req.params.id);
        res.send(meeting)
    }
    catch (error) {
        next(error)
    }
}
module.exports.addMeeting = async function (req, res, next) {
    try {
        const insertMeeting = await MeetingService.addMeeting(req.body);
        res.send(insertMeeting)
    }
    catch (error) {
        next(error)
    }
}
module.exports.updateMeeting=async function(req,res,next){
    try{
        const updatedMeeting=await MeetingService.updateMeeting(req.params.id,req.body);
        res.send(updatedMeeting)
    }
    catch(error){
        next(error)
    }
}
module.exports.deleteMeeting=async function(req,res,next){
    try{
        const deletedMeeting=await MeetingService.deleteMeeting(req.params.id);
        res.send(deletedMeeting)
    }
    catch{
        next(error)
    }
}