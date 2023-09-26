import UserContainer from './UserContainer';

function NavLinks({ user, logout }) {
  return (
    <div className='nav-container'>
      <ul>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
}
export default NavLinks;
