import { useState, createContext } from 'react';
import NavLinks from './NavLinks';
import { useContext } from 'react';
export const NavbarContext = createContext();

// custom hook

export const useAppContext = () => useContext(NavbarContext);

function Navbar() {
  const [user, setUser] = useState({ name: 'Anna' });

  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>Logo</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}
export default Navbar;
