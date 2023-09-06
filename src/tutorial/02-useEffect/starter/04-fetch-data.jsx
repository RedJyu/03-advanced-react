import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return users.map((person) => {
    const { login, id, node_id, avatar_url } = person;
    return (
      <section>
        <div key={id}>
          <h2>{login}</h2>
          <img src={avatar_url} alt='img' />
        </div>
      </section>
    );
  });
};
export default FetchData;
