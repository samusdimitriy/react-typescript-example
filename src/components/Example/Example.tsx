type State = { count: number };
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set"; payload: number };
type Dispatch = (action: Action) => void; // Dispatch is a type alias for a function that takes an Action as an argument and returns void.
