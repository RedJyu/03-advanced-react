import { useState } from 'react';
import { data } from '../../../data';
import { v4 as uuidv4 } from 'uuid';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const userID = uuidv4();
    const newUser = { id: userID, name: name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName('');
    console.log(users);
  };
  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button className='btn' onClick={() => removeUser(user.id)}>
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
