const { post } = require("../Controllers/user.controller");
const UserModel = require("../models/user.model");
const fs = require("fs");
const { json } = require("body-parser");
// const dataFromFile=fs.readFileSync('../file.json');
// myData=JSON.parse(dataFromFile);
// let users_count = 4;
const uuid=require('uuid')

const getData = async () =>
  fs.readFile("../file.json").then((data) => JSON.parse(data.users));
const updateData = async (data) =>
  fs.writeFile("../file.json", JSON.stringify(data));

const addUser = async (user) => {
  if (!user.firstName || !user.lastName || !user.password || !user.email) {
    throw new Error("user must include username ,email and password");
  }
  const id = uuid.v4();
  user.id = id;
//   user.id = users_count + 1;
//   users_count += 1;
  const users = (await getData()) || [];
  const exists = users.find(
    (_user) => _user.email === user.email || _user.password === user.password
  );
  if (exists) {
    throw new Error("details already exist");
  }
  users.push(user);
  await updateData(users);
  return user;
  // const user=new UserModel(name, email, password);
  // myData=[...myData,user]
  // return myData;
};
const getUsersList = async () => {
  const users = await getData();
  return users;
  // return await myData.users;
};
const getUser = async (id) => {
  const users = await getData();
  const _user = await users.find((user) => user.id === id);
  return _user;
  // return await myData.users.find((user)=>user.id===id);
};
const deleteUser = async (id) => {
  const users = await getData();
  const index = await users.findIndex((user) => user.id === id);
  users.splice(index, 1);
  await updateData(users);
  // return myData.users.filter((user)=>user.id!==id);
};
const updateUser = async (id, newUser) => {
  const users = await getData();
  const _user = await users.find((user) => user.id === id);
  Object.assign(_user, newUser);
  await updateData(users);
  return _user;
  // const mappedData = myData.map((user)=>{
  //    return user.id===id?newUser:user
  // })
  // return mappedData;
};

module.exports = {
  addUser,
  getUsersList,
  getUser,
  deleteUser,
  updateUser,
};
