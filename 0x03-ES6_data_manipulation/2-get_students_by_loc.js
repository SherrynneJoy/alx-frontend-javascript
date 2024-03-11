export default function getStudentsByLocation(students, city) {
  const chosen = students.filter((student) => student.location === city);
  return chosen;
}
