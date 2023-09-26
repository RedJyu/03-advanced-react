import { useState } from 'react';
import NavLinks from './NavLinks';

function Navbar() {
  const [user, setUser] = useState({ name: 'Anna' });

  const logout = () => {
    setUser(null);
  };
  return (
    <nav className='navbar'>
      <h5>Logo</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
}
export default Navbar;
