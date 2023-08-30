import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const Add = () => {
    setTimeout(() => {
      setValue((current) => {
        return current + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type='button' onClick={Add}>
        click me
      </button>
    </div>
  );
};

export default UseStateGotcha;
