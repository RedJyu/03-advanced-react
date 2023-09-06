import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>error</h2>;
  }
  return (
    <div>
      <img style={{ width: '150px' }} src={user.avatar_url} alt='person' />
      <h2>{user.name}</h2>
      <h3>{user.company}</h3>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
