import { useState, useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';

// as app grows we can add different things to default state like isOpen etc
const defaultState = {
  people: data,
};

//state and action are just parameters and can be named freely
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    // we should always spread state as when we have many things in default they will get overwritten
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching '${action.type}'-action type`);
};

const ReducerBasics = () => {
  // must pass function and default state
  // its similar to useState but we get state and dispatch
  // [state] all values will be represented here
  // !!!IMPORTANT, we will use dispatch to say what action it will need to do do, it goes to reducer and reducer returns our new state!!!
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // setPeople(newPeople);
  };

  const clearList = () => {
    //dispatch is always looking for object and we HAVE to provide type that is string, usually its in UPPERCASE and has assigned variable
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
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
