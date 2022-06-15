const StudentController = require("../lib/controllers/StudentController");
const Reader = require("./../lib/utils/Reader");
describe("Pruebas de unidad de StudentService", () => {
  test("1) getAllStudents() test", () => {
    const students = StudentController.getAllStudents();
    const file = Reader.readJsonFile("visualpartners.json");
    expect(students).toMatchObject(file);
  });

  test("2) getStudentEmail() test", () => {
    const emails = StudentController.getStudentEmail();
    expect(emails[1]).toBe("Sexton@visualpartnership.xyz");
  });
});
