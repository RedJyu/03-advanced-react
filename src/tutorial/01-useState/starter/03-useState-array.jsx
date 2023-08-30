import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const remove = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const removeAll = () => {
    setPeople([]);
  };
  return (
    <>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button type='button' className='btn' onClick={() => remove(id)}>
                remove
              </button>
            </div>
          );
        })}
        <button type='button' className='btn' onClick={removeAll}>
          remove all
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
