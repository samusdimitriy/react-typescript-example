const student = {
  name: "John",
  age: 30,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let studentName = getProperty(student, "name");
console.log(studentName);

let studentAge = getProperty(student, "email");
console.log(studentAge);
