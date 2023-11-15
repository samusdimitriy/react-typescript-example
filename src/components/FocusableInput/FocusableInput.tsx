import React, { forwardRef, useImperativeHandle, useRef } from "react";
import type { ForwardedRef } from "react";

type Props = {
  initialText: string;
};

export type FocusableInputRef = {
  focus: () => void;
};

function FocusableInput(
  { initialText }: Props,
  ref: ForwardedRef<FocusableInputRef>
) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return <input ref={inputRef} type="text" defaultValue={initialText} />;
}

const refForwarded = forwardRef<FocusableInputRef, Props>(FocusableInput);

export { refForwarded as FocusableInput };
