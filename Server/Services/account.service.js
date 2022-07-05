const { post } = require('../Controllers/user.controller');
const UserModel = require('../models/user.model');
const fs=require('fs');
const { json } = require('body-parser');
const dateFromFile=fs.readFileSync('../file.json');
myData=JSON.parse(dateFromFile);

const login = async (email,password) => {
    return await myData.find((u)=>u.email===email&&u.password===password);
};

module.exports = {
    login
}