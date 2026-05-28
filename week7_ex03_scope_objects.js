let globalCount = 10;

function localScopeExample() {
  let localCount = 5;

  console.log("Inside function:");
  console.log("Global Count:", globalCount);
  console.log("Local Count:", localCount);
}

localScopeExample();

function modifyVariables() {
  let localCount = 20;

  globalCount += 5;

  localCount += 10;

  console.log("Modified Global Count:", globalCount);
  console.log("Modified Local Count:", localCount);
}

modifyVariables();

console.log("Global Count outside function:", globalCount);

function Student(firstName, lastName, age, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.course = course;

  this.introduce = function () {
    console.log(
      "Hi, my name is " +
        this.firstName +
        " " +
        this.lastName +
        ". I study " +
        this.course +
        ".",
    );
  };
}

let student1 = new Student("Angela", "Smith", 18, "Frontend Development");
let student2 = new Student("John", "Doe", 20, "Backend Development");
let student3 = new Student("Sarah", "Jones", 19, "Graphic Design");

console.log(student1);
console.log(student2);
console.log(student3);

student1.introduce();
student2.introduce();
student3.introduce();

let person = {
  firstName: "Angela",
  lastName: "Smith",

  address: {
    street: "12 Main Road",
    city: "Cape Town",
    country: "South Africa",
  },

  hobbies: ["Coding", "Music", "Gaming"],

  contact: {
    email: "angela@email.com",
    phone: "0123456789",
  },
};

console.log(person);

console.log(person.address.city);
console.log(person.contact.email);
console.log(person.hobbies[0]);
