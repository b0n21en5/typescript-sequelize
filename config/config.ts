import dotenv from "dotenv";

dotenv.config();

interface APP_CONFIG {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: "mysql" | "postgres" | "mariadb" | "mssql";
  use_env_variable: string;
}

interface APP_MODES {
  [key: string]: APP_CONFIG;
  development: APP_CONFIG;
  test: APP_CONFIG;
  production: APP_CONFIG;
}

const config: APP_MODES = {
  development: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    host: "127.0.0.1",
    dialect: "mysql",
    use_env_variable: process.env.DB_CONNECTION_URI!,
  },
  test: {
    username: "root",
    password: "",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    use_env_variable: "",
  },
  production: {
    username: "root",
    password: "",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    use_env_variable: "",
  },
};

export { APP_MODES, APP_CONFIG, config };
