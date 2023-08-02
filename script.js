// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method added to Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee
function Employee(name, age, jobTitle) {
  // Calling the Person constructor with 'this' context
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method added to Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Usage:
const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John, I am 30 years old.

const employee1 = new Employee("Alice", 25, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Alice, I am 25 years old.
employee1.jobGreet(); // Output: Hello, my name is Alice, I am 25 years old, and my job title is Software Engineer.
