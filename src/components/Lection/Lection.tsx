type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonWithoutAddress = Omit<Person, "address">;

const personWithoutAddress: PersonWithoutAddress = {
  name: "John",
  age: 25,
};
