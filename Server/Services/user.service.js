const { post } = require('../Controllers/user.controller');
const UserModel = require('../models/user.model');
const fs=require('fs');
const { json } = require('body-parser');
const dateFromFile=fs.readFileSync('../file.json');
myData=JSON.parse(dateFromFile);

const addUser = async (name, email, password) => {
    const user=new UserModel(name, email, password);
    UserModel.add(user);
};
const getUsersList = async () => {
    return await myData.users;
};
const getUser = async (id) => {
    UserModel;
};
const deleteUser = async (id) => {
    UserModel;
};
const updateUser = async (id,newUser) => {
    UserModel;
};

module.exports = {
    addUser,getUsersList,getUser,deleteUser,updateUser
}