const { post } = require('../Controllers/user.controller');
const UserModel = require('../models/user.model');

const addUser = async (name, email, password) => {
    const user=new UserModel(name, email, password);
    UserModel.add(user);
};

module.exports = {
    addUser,
}