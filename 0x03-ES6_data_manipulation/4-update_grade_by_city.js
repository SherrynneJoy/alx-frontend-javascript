export default function updateStudentGradeByCity(students, city, newGrades) {
  const chosen = students.filter((student) => student.location === city);
  const newList = chosen.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return newList;
}
