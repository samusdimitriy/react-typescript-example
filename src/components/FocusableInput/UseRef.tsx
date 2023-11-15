import React, { useRef } from "react";

import { FocusableInput } from "./FocusableInput";
import type { FocusableInputRef } from "./FocusableInput";

export function OtherComponent() {
  const inputRef = useRef<FocusableInputRef>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <FocusableInput ref={inputRef} initialText="Hello" />
      <button onClick={handleClick}>Set focus</button>
    </div>
  );
}
