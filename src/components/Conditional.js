import React from 'react'

function Contional (props){
  return (
    <div>
      props.isLoading === true ? <h1>Loading</h1> : <h1>The data is loaded and everything is cool</h1>
    </div>
  )
}


export default Contional;