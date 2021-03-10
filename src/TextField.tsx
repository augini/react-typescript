import React, { useRef, useState } from 'react';

interface Person {
  name: string;
  lastName: string;
}

interface Props {
  /** color to use for the background */
  text?: 'hello';
  isPromising?: true;
  i?: number;
  func?: (name: string) => string;
  user?: Person;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ text, handleChange }) => {
  const [count, setCount] = useState<string | number | null | undefined>(0);
  const [saying, setSaying] = useState<TextNode>({ text: 'Small pieces' });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <p>{text}</p>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
