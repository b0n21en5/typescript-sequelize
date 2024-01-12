import express from "express";
import db from "./models";
import { demoUsers } from "./seeders/users";
import { demoProjects } from "./seeders/projects";
import { demoProjectAssignments } from "./seeders/projectassignments";
import UserRoutes from "./routes/users";

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

const createUsers = () => {
  demoUsers.map((user) => db.User.create(user));
};

// createUsers();

const createProjects = () => {
  demoProjects.map((project) => db.Project.create(project));
};

// createProjects();

const createAssignments = () => {
  demoProjectAssignments.map((assignment) =>
    db.ProjectAssignments.create(assignment)
  );
};

// createAssignments();

const findUser = () => {
  db.User.findOne({ where: { id: "5dd5f20c-0e52-4fae-961a-311bec5fb4b0" } })
    .then((user: any) =>
      console.log(
        `fetched user: ${user.name + ", " + user.email + ", " + user.password}`
      )
    )
    .catch((err: any) => console.log(err));
};

// findUser();

const findAllUser = () => {
  db.User.findAll()
    .then((user: object) => console.log(JSON.stringify(user) + " "))
    .catch((err: object) => {
      console.error(err);
    });
};

// findAllUser();

// app.get("/", (req, res) => {
//   db.User.findAll({ include: { model: db.Project } })
//     .then((result: object) => res.send(result))
//     .catch((err: object) => console.error(err));
// });

app.use("/users", UserRoutes);

const findall = () => {
  db.User.findAll({ include: { model: db.Project } })
    .then((result: object) => console.log(JSON.stringify(result)))
    .catch((err: object) => console.error(err));
};
// findall();

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
