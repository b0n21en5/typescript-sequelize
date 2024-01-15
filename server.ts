import express from "express";
import db from "./models";
import { demoUsers } from "./seeders/users";
import { demoProjects } from "./seeders/projects";
import { demoProjectAssignments } from "./seeders/projectassignments";
import userRoutes from "./routes/users";

const normalizePort = (val: string): number | false => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return false;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const port: number = normalizePort(process.env.PORT as string) || 3000;

const app = express();

app.use("/users", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});


export default app;