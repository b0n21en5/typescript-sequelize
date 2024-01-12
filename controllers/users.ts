const UserServices = require("../services/users");

const fetchAllUsers = async () => {
  const allUsers = await UserServices.getAllUsers();

  return allUsers;
};

module.exports = { fetchAllUsers };
