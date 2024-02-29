export {};

// An interface can only extend an object type or intersection of object types with statically known members.ts(2312)

// EXAMPLE 1 - Use a type alias with an intersection type to solve the error

type CountryOrSalary = { country: string } | { salary: number };

type Emp = CountryOrSalary & {
  id: number;
  name: string;
};

const emp: Emp = {
  id: 1,
  name: 'Bobby Hadz',
  country: 'Germany',
  salary: 100,
};
console.log(emp);

// ---------------------------------------------------

// // EXAMPLE 2 - Using an intersection type instead of a union

// type CountryAndSalary = { country: string } & { salary: number };

// interface Employee extends CountryAndSalary {
//   id: number;
//   name: string;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   country: 'Germany',
//   salary: 100,
// };
// console.log(emp);
