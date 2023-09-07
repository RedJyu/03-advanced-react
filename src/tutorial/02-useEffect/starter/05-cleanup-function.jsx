import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        className='btn'
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      {toggle && <Test />}
    </div>
  );
};

const Test = () => {
  useEffect(() => {
    console.log('test test');
  }, []);
  return <h1>test hello</h1>;
};

export default CleanupFunction;
