class StudentService {
    static getAllStudents(students){
        return students;
    }
    static getMailWithCertification(students){
        return  students.filter((student) => student.haveCertification === true);
    }
    static getStudentsByCredits(students,credits){
        return  students.filter((student) => student.credits>credits);
    }
}
  
module.exports = StudentService;