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
  const { name, company, bio, avatar_url } = user;
  return (
    <div>
      <img style={{ width: '150px' }} src={avatar_url} alt='person' />
      <h2>{name}</h2>
      <h3>{company}</h3>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
