import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{name || 'default value'}</h2>
      {text && (
        <div>
          <h2>test</h2>
          <h2>{name}</h2>
        </div>
      )}

      {user && <SomeComponent name={user.name} />}
    </div>
  );
};
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>test2</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
