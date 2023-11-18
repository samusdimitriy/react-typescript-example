type User = {
  name: string;
  age: number;
};

const john: Readonly<User> = {
  name: "John",
  age: 30,
};

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
