const UserService = require('../services/user.service');

module.exports.getAllUsers= async (req, res, next) => {

    //return a list of users
    try{
        const users=await UserService.getUsersList();
        res.send(users);
    }
    catch(err){
        next(err)
    }
}
module.exports.getUserById= async (req, res, next) => {

    //return a specific user
    try{
        const user=await UserService.getUser(req.params.id);
        res.send(user);
    }
    catch(err){
        next(err)
    }
}
module.exports.addUser= async (req, res, next) => {

    //add a new user
    try{
        const users=await UserService.addUser(req.body);
        res.send(user);
    }
    catch(err){
        next(err)
    }
   
}
module.exports.updateUserDetails= async (req, res, next) => {

    //update user details
    try{
        const users=await UserService.updateUser(req.body);
        res.send(user);
    }
    catch(err){
        next(err)
    }
}
module.exports.removeUser= async (req, res, next) => {

    //remove a user
    try{
        const users=await UserService.deleteUser(req.params.id);
        res.send(users);
    }
    catch(err){
        next(err)
    }
}
// router.get('/getUsers', async (req, res) => {
// });
// router.get('/signIn', async (req, res) => {
//     //return a specific user
// });
// router.post('/signUp', async (req, res) => {
//     //add a new user
//     UserService.addUser(
//         // req.params.name,req.params.email,req.params.password
//         );
// });
// router.put('/updateDetails', async (req, res) => {
//     //update user details
// });
// router.delete('/deleteUser', async (req, res) => {
//     //remove a user
// });


module.exports = router;