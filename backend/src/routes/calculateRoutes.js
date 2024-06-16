const express=require('express');
const calculate = require('../controllers/CalcualteController');

const router=express.Router();


router.post('/calculate',calculate);


module.exports=router;