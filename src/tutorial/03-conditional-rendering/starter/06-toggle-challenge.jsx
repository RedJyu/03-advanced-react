import { useState } from 'react';

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <h2>{toggle ? 'hello' : 'good bye'}</h2>
      <button
        type='button'
        className='btn'
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default ToggleChallenge;
