import React from "react";
import "./App.css";
import { User } from "./App.types";
// import { FocusableInput } from "../FocusableInput/FocusableInput";
import { CheckoutPage } from "../PaymentForm/CheckoutPage";

type Props = {
  user: User;
};

export function App({ user }: Props) {
  return (
    <div>
      {/* <h1>{user.name}</h1>
      <p>{user.email}</p>
      <FocusableInput initialText="Hello" /> */}
      <CheckoutPage />
    </div>
  );
}
