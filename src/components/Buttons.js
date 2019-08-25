import React, { Component } from 'react'


const imageStyed = {

    background: "none"

}



const Button = ({ image, onClick}) => (

<button onClick={onClick} ><img style={imageStyed} src={image} /></button>


); 





export default Button