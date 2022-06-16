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

  test("3) getStudentCredit() test", () => {
    const studentsByCredit = StudentController.getStudentByCredit();
    const warren = {
      id: "6264d5d89f1df827eb84bb23",
      name: "Warren",
      email: "Todd@visualpartnership.xyz",
      credits: 508,
      enrollments: ["Visual Thinking Intermedio", "Visual Thinking Avanzado"],
      previousCourses: 1,
      haveCertification: true,
    };
    expect(studentsByCredit[0]).toMatchObject(warren);
  });
});
