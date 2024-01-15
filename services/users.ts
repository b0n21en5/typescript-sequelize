import { Request, Response } from "express";
import db from "../models";
import { SequelizeScopeError } from "sequelize";

export const getAllUsers = async () => {
  try {
    const allUsers = await db.User.findAll();

    return allUsers;
  } catch (error: any) {
    if (error instanceof SequelizeScopeError) {
      console.error(error);
    } else {
      throw new Error(error);
    }
  }
};

export const getUserDetails = async (params: { uid: any }) => {
  try {
    const { uid } = params;

    const user = await db.User.findOne({ where: { id: uid } });
    if (!user) {
      return { success: false, message: "no usr found!" };
    }

    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const destroyUser = async (params: { uid: any }) => {
  try {
    const { uid } = params;

    const user = await db.User.destroy({ where: { id: uid } });

    return { success: true, message: `user deleted successfully!`, user };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateUser = async (req: Request) => {
  try {
    const { name, email, password } = req.body;

    const { uid } = req.params;

    const user = await db.User.findOne(uid);
    if (!user) {
      return { success: false, message: "no user found!" };
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    await user.save();

    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};
