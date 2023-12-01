import React, { useState } from "react";

interface Props {
  onChange: (value: string) => void;
  min: number;
  max: number;
}

const NumberSelect = ({ onChange, min, max }: Props) => {
  const [value, setValue] = useState("");

  const handleNumber1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      type="number"
      id="number1"
      value={value}
      min={min}
      max={max}
      onChange={handleNumber1Change}
      placeholder="Enter a number"
      className="bg-dark-green focus:ring-bright-yellow/70 block w-full rounded-md border p-2 focus:outline-none focus:ring-2"
    />
  );
};

export default NumberSelect;
