const UserServices = require("../services/users");
import { Request, Response } from "express";

const fetchAllUsers = async (req: Request, res: Response) => {
  const allUsers = await UserServices.getAllUsers();
  return res.json(allUsers);
};

const fetchUserDetails = async (req: Request, res: Response) => {
  const user = await UserServices.getUserDetails(req.params);
  return res.json(user);
};

module.exports = { fetchAllUsers, fetchUserDetails };
