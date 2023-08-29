import { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];

  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const click = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>Clicked {count} times</h4>
      <button type='button' className='btn' onClick={click}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
