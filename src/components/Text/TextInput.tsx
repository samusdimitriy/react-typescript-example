import React, { useState } from "react";

type Props = {
  initialValue: string;
  onSave: (value: string) => void;
};

export function TextInput({ initialValue, onSave }: Props) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    onSave(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
