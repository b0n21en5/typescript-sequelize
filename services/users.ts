import { Request, Response } from "express";
import db from "../models";
import { SequelizeScopeError } from "sequelize";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await db.User.findAll();

    return res.json(allUsers);
  } catch (error: any) {
    if (error instanceof SequelizeScopeError) {
      console.error(error);
    } else {
      throw new Error(error);
    }
  }
};

module.exports = { getAllUsers };
