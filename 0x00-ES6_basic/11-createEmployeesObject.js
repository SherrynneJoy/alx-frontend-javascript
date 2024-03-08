export default function createEmployeesObject(departmentName, employees) {
  const myEmployees = employees.map((employee) => `'${employee}'`).join(', ');
  return (`{ ${departmentName}: [${myEmployees}] }`);
}
