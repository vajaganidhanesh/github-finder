import React from 'react';
import UsersResults from '../users/UsersResults';
import UserSearch from '../users/UserSearch';


function Home() {
    console.log('home page');
  return (
    <>
      {/* user search component */}
      <UserSearch/>
      <UsersResults/>
    </>
  )
}

export default Home
