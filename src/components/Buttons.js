import React from 'react'






const Button = ({ image, onClick, name}) => (

<img src={image} alt={name}  onClick={onClick} style={ {cursor: 'pointer'}}/>


); 





export default Button