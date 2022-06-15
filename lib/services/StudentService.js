class StudentService {
  static filterByCertification(students) {
    const studentByCertification = students.filter(
      (student) => student.haveCertification === true
    );
    return studentByCertification;
  }

  static getAllStudents(students) {
    return students;
  }
  static getAllEmails(students) {
    const studentsFilter = StudentService.filterByCertification(students);
    const studentMaped = studentsFilter.map((student) => student.email);
    return studentMaped;
  }
}
module.exports = StudentService;
