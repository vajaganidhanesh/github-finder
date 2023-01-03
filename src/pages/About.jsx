import React from 'react'

function About() {
    console.log('about page');

  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is made of functional based components where context and reducer
        hooks are used in these project instead of Redux.
      </p>

      <p className="text-lg text-white">
        For source code {" "}
        <a
          href="https://github.com/vajaganidhanesh/github-finder"
          target="_blank"
          rel="noreferrer"
          style={{fontSize:"18px",fontWeight:'bold'}}
        >
          Click here...
        </a>
      </p>
    </>
  );
}

export default About
