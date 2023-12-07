import logo from './logo.svg';
import './App.css';
import React from 'react';

function abcd()
{
  alert("Are you OK?")
}
function Demo()
{
  return(
    <>
      <h1>Hello React JS!
      </h1>
      {(1==1) ? "True" : "False"}
    </>
  )
}

// export default Demo;

class DemoClass extends React.Component
{
  render()
  {
    return(
      <>
        <h1>Welcome to React World!</h1>
        <Demo/>
        <br/>
        <button onClick={abcd}>Click</button>
      </>
    )
  }
}

export default DemoClass;