type CityDatabase = Record<string, number>;

const database: CityDatabase = {
  "New York": 1,
  "Los Angeles": 2,
  Chicago: 3,
};

database["New York"] = 10;
