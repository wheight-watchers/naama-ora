const { post } = require('../Controllers/user.controller');
const UserModel = require('../models/user.model');
const fs=require('fs');
const { json } = require('body-parser');
const dateFromFile=fs.readFileSync('../file.json');
myData=JSON.parse(dateFromFile);

const addUser = async (name, email, password) => {
    const user=new UserModel(name, email, password);
    // UserModel.add(user);
    myData=[...myData,user]
};
const getUsersList = async () => {
    return await myData.users;
};
const getUser = async (id) => {
    return await myData.users.find((user)=>user.id===id)
};
const deleteUser = async (id) => {
    myData=myData.users.filter((user)=>user.id!==id)
};
const updateUser = async (id,newUser) => {
    myData=myData.map((user)=>{
       return user.id===id?newUser:user
    })
};

module.exports = {
    addUser,getUsersList,getUser,deleteUser,updateUser
}