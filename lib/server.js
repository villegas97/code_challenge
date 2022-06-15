const StudentController = require("./../lib/controllers/StudentController");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/v1/students", (request, response) => {
  const students = StudentController.getAllStudents();
  response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
  const emails = StudentController.getStudentEmail();
  response.json(emails);
});

app.listen(port, () => {
  console.log(`Students API listening on port: ${port}`);
});
