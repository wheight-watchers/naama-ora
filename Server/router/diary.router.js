const express= require('express');
const controller=require('../Controllers/diary.controller')
const router=express.Router();
router.get('/:userId',controller.getDiary);
router.post('/:userId',controller.addDiary);
router.put('/:userId/:dairyId',controller.updateDiary);
router.delete('/:userId/:dairyId',controller.deleteDairy);

module.exports=router;