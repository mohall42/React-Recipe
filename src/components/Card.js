import React from 'react'
import styled from 'styled-components'



const cardStyled = {

  width: "800px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  borderRadius: "8px",
  background: "white",
 
 

}


const CardContainer = styled.div `

  
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  alignItems: center; 
 


  .imageContainer{
    margin-top: 2%;
    margin-left: 2%;
    height: 300px;
    width: 300px;

    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    border-radius: 8px;
    justify-self: center;
  }

  .bodyContainer{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    font-size: calc(10px + .65vw);
    
  }

  .linkContainer{
    grid-column-start: 2;
    grid-row-start: 2;
  }


`;

       

const Card = (props) => {
    
      const { body, image, title, link, zIndex = 0, position} = props;
        
      return(
        <div style={{...cardStyled, zIndex, position}}>



          <CardContainer>

            <div className="imageContainer">
                <img src={image} alt={title} />
            </div>
            <div className="bodyContainer">

              <h3>{title}</h3>
              
              <p>{body}</p>
            </div>
            <div className="linkContainer">

              {/* <a href={link}><img alt={title} src={logo}></img></a> */}
              <a href={link}>link</a>

            </div>

            
          </CardContainer>
        </div>
      
          
        

      )
    
};




export default Card;

