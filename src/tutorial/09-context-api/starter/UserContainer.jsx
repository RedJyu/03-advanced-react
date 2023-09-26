function UserContainer({ user, logout }) {
  return (
    <div className='user-container'>
      {user ? (
        <>
          {' '}
          <h2>{user?.name?.toUpperCase()}</h2>
          <button type='button' className='btn' onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}
export default UserContainer;
