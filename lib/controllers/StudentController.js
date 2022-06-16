const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getAllStudents() {
        const students = Reader.readJsonFile("visualpartners.json");
        const allStudents = StudentService.getAllStudents(students);
        return allStudents;
    }
    static getStudentEmail() {
        const students = Reader.readJsonFile("visualpartners.json");
        const allEmails = StudentService.getAllEmails(students);
        return allEmails;
    }

    static getStudentByCredit() {
        const students = Reader.readJsonFile("visualpartners.json");
        const credits = StudentService.getCredits(students);
        return credits;
    }
}
module.exports = StudentController;
