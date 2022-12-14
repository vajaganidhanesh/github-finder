import React from 'react'

function Home() {
    console.log('home page');
  return (
    <div>
      <h1>Home component</h1>
      
      {process.env.REACT_APP_GITHUB_TOKEN}
    </div>
  )
}

export default Home
