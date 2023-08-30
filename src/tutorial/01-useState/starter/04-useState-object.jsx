import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState('Anna');
  // const [age, setAge] = useState(25);
  // const [hobby, setHobby] = useState('driving');

  // const newPerson = () => {
  //   setName('John');
  //   setAge(30);
  //   setHobby('Flying');
  // };
  const Person = { name: 'Anna', age: 35, hobby: 'driving' };
  const [person, setPerson] = useState(Person);

  const John = () => {
    setPerson({ name: 'John', age: 80, hobby: 'flying' });
  };
  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.hobby}</h4>
      <button
        type='button'
        className='btn'
        onClick={() => {
          John();
        }}
      >
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
