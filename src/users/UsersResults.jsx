import React, { useEffect } from 'react'

function UsersResults() {

    // useEffect(()=>{
    //     fetchUser()
    // },[])

    // const fetchUser = async()=>{
    //  const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
    //     headers:{
    //         Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    //     },
    //  })
    //  const data = await response.json();
    //  console.log(data);
    // }
  return (
    <div>
      its user result {process.env.REACT_APP_GITHUB_URL}SDFDS
    </div>
  )
}

export default UsersResults
