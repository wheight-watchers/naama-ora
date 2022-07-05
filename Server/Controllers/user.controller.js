const { Router } = require('express');
const UserService = require('../services/user.service');

const router = Router();

router.get('/getUsers', async (req, res) => {
    //return a list of users
});
router.get('/signIn', async (req, res) => {
    //return a specific user
});
router.post('/signUp', async (req, res) => {
    //add a new user
    UserService.addUser(
        // req.params.name,req.params.email,req.params.password
        );
});
router.put('/updateDetails', async (req, res) => {
    //update user details
});
router.delete('/deleteUser', async (req, res) => {
    //remove a user
});


module.exports = router;