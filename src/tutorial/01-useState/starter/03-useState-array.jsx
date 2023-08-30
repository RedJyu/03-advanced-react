import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const remove = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => remove(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type='button' onClick={() => setPeople([])}>
        remove all
      </button>
    </div>
  );
};

export default UseStateArray;
