const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
  static getAllStudents() {
    const students = Reader.readJsonFile("visualpartners.json");
    const allStudents = StudentService.getAllStudents(students);
    return allStudents;
  }
}
module.exports = StudentController;
