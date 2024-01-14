import { Request, Response } from "express";
import db from "../models";
import { SequelizeScopeError } from "sequelize";

const getAllUsers = async () => {
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

const getUserDetails = async (params: { uid: any }) => {
  try {
    const { uid } = params;

    const user = await db.User.findOne({ where: { id: uid } });

    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

module.exports = { getAllUsers, getUserDetails };
