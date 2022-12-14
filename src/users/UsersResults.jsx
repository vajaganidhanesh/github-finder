import React, { useContext, useEffect } from 'react'
import Spinner from '../Component/Spinner';
import UserItem from './UserItem';
import GithubContext from '../context/github/GithubContext';

function UsersResults() {

    const {users,loading,fetchUsers} = useContext(GithubContext)

    useEffect(()=>{
        fetchUsers()
    },[])

    
  if(!loading){
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user,index)=>(
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
  else{
    return <Spinner/>
  }
  
}

export default UsersResults
