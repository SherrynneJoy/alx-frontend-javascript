export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return []; // Return an empty array if the argument is not an array
  }
  const ids = students.map((student) => student.id);
  return ids;
}
