const StudentController = require("./../lib/controllers/StudentController");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/v1/students", (request, response) => {
  const students = StudentController.getAllStudents();
  response.json(students);
});

app.listen(port, () => {
  console.log(`Students API listening on port: ${port}`);
});
