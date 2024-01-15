import {
  destroyUser,
  getAllUsers,
  getUserDetails,
  updateUser,
} from "../services/users";
import { Request, Response } from "express";

export const fetchAllUsers = async (req: Request, res: Response) => {
  const allUsers = await getAllUsers();
  return res.json(allUsers);
};

export const fetchUserDetails = async (req: Request, res: Response) => {
  const user = await getUserDetails({ uid: req.params.uid });
  return res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const message = await destroyUser({ uid: req.params.uid });

  return res.json(message);
};

export const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUser(req);

  return res.json(updateUser);
};
