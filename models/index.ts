"use strict";

import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import process from "process";
import { config, APP_CONFIG } from "../config/config";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

const currentConfig: APP_CONFIG = config[env];
const db: any = {};

let sequelize: Sequelize;
if (currentConfig.use_env_variable) {
  sequelize = new Sequelize(
    process.env[currentConfig.use_env_variable] as string,
    currentConfig
  );
} else {
  sequelize = new Sequelize(
    currentConfig.database,
    currentConfig.username,
    currentConfig.password,
    currentConfig
  );
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".ts" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
