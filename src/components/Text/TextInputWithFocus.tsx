import React, { useRef } from "react";

export function TextInputWithFocus() {
  const inputEl = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const textarearef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const onButtonClick = () => {
    inputEl.current?.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <div ref={divRef} />
      <textarea ref={textarearef} />
      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
