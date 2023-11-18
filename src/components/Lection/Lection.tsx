type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonSummary = Pick<Person, "name" | "age">;
