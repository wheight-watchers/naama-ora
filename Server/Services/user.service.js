const { post } = require('../Controllers/user.controller');
const UserModel = require('../models/user.model');

const addUser = async (name, email, password) => {
    const user=new UserModel(name, email, password);
    UserModel.add(user);
};
const getUsersList = async () => {
    UserModel;
};
const getUser = async () => {
    UserModel;
};
const deleteUser = async () => {
    UserModel;
};
const updateUser = async () => {
    UserModel;
};

module.exports = {
    addUser,getUsersList,getUser,deleteUser,updateUser
}