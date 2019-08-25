import React from 'react'
import styled from 'styled-components'


const cardStyled = {

  width: "900px",
  height: "700px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  borderRadius: "8px",
  background: "#000000",

  display: "grid",
  gridTemplateColumns: "5% auto 5%", 
  gridTemplateRows: "2fr 1fr",
  alignItems: "center"
 

}

const imageContainer = {
  gridColumnStart: "2",
  grindColumnEnd: '3',
  gridRowStart: "1",
  justifySelf: "center"


}

const bodyContainer = {

  gridColumnStart: "2",
  gridRowStart: "2",
  fontSize: "calc(10px + .65vw)",
  color: "white"
  
}



const CardContainer = styled.div `

width: 900px;
  height: 700px;
  boxShadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  borderRadius: 8px;
  background: #000000;

  display: grid;
  grid-template-columns: 5% auto 5%;
  grid-template-rows: 2fr 1fr;
  alignItems: center;
 


  .imageContainer{
    margin-top: 2%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    border-radius: 8px;
    justify-self: center;
  }

  .bodyContainer{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    font-size: calc(10px + .65vw);
    color: white;
  }

  .linkContainer{
    grid-column-start: 3;
    grid-row-start: 2;
  }


`;

       

const Card = (props) => {
    
      const { body, image, title, link, zIndex} = props;
        
      return(
      
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
          
        

      )
    
};




export default Card;

