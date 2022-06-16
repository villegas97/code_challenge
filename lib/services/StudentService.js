class StudentService {
    static filterByCertification(students) {
        const studentByCertification = students.filter(
            (student) => student.haveCertification === true
        );
        return studentByCertification;
    }
    static filterByCredits(students) {
        const studentByCredits = students.filter(
            (student) => student.credits > 500
        );
        return studentByCredits;
    }

    static getAllStudents(students) {
        return students;
    }
    static getAllEmails(students) {
        const studentsFilter = StudentService.filterByCertification(students);
        const studentsEmailMaped = studentsFilter.map((student) => student.email);
        return studentsEmailMaped;
    }
    static getCredits(students) {
        const studentsFilter = StudentService.filterByCredits(students);
        const studentsCreditMaped = studentsFilter.map((student) => student);
        return studentsCreditMaped;
    }
}
module.exports = StudentService;
