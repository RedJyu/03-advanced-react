import { useState } from 'react';

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
  };
  //can be returned as array to
  return { show, toggle };
};

export default useToggle;
