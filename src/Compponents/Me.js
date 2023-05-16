import React from 'react'

function Me(props) {
  return (
    <div>
    <p> {props.FullName} </p> 
    {props.children}   
    </div>
  )
}

export default Me