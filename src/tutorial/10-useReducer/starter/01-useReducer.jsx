import { useState, useReducer } from 'react';
import { data } from '../../../data';

// as app grows we can add different things to default state like isOpen etc
const defaultState = {
  people: data,
};

const reducer = () => {};

const ReducerBasics = () => {
  // must pass function and default state
  // its similar to useState but we get state and dispatch
  // [state] all values will be represented here
  // !!!IMPORTANT, we will use dispatch to say what action it will need to do do, it goes to reducer and reducer returns our state!!!
  const [state, dispatch] = useReducer(reducer, defaultState);

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([]);
  };
  const resetList = () => {
    // setPeople(data);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
