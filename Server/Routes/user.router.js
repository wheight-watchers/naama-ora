const express=require('express');
// const { Router } = require('express');
// const router = Router();
const controller=require('../Controllers/user.controller');
const router=express.Router();

router.get('/',controller.getAllUsers);
router.get('/:id',controller.getUserById);
router.post('/',controller.addUser);
router.put('/',controller.updateUserDetails);
router.delete('/:id',controller.removeUser);

module.exports=router;