// Exercise #3 Debugging
// ให้แก้ไข Error ที่เกิดจาก JavaScript โค้ดที่กำหนดให้
// ผลลัพธ์ของโปรแกรมที่ถูกต้องจะต้องแสดงแบบนี้บนหน้าจอ Console
//  'Employee Name: John Doe'
//  'Employee Age: 18'
//  'Employee Address: 123 Main Street, Cityville, Stateville, Countryland 12345'

// Start coding here
const employee = {
  name: "John Doe",
  age: 18,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    states: "Stateville",
    country: "Countryland",
    postalCode: "12345",
  },
};

console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log(
  "Employee Address: " +
    employee.address.street +
    ", " +
    employee.address.city +
    ", " +
    employee.address.states +
    ", " +
    employee.address.country +
    " " +
    employee.address.postalCode
);
