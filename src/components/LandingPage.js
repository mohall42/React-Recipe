import React, {Component} from 'react'
import styled from 'styled-components'
import background from '../images/Background.svg'
import Logo from '../images/logo.svg'

const Box = styled.div`
  
  display: flex;
  height: 500px;
  width: 1000px;
  margin: 1% auto;
  background: white;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  justify-content: center;

  input[type=text], button {
    display: block;
    height: 30px;
    width: 400px;
    border:2px solid #ccc; 
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 30% auto;
    
}

`;

const IconBox = styled.div` 

  display: flex;
  justify-content: flex-end;
  margin-top: 15%;


`;

const Main = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat;
  background-size: cover;
  overflow: hidden;

`;

Main.displayName = 'Main';

class LandingPage extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       ingredients: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }
  

handleChange(event){
  this.setState({
    ingredients: event.target.value
  })
}


render(){
    return (
      <Main className = "mainSection">
        
         <Box>

          <form >
            <h1 className='title' >Please enter ingredients</h1>
            <input type="text"
              placeholder="Ingredients"
              name="Ingredient"
              value={this.state.ingredients}
              onChange={this.handleChange}

              />

              <button onClick={() => this.props.handleSubmit(this.state.ingredients)} >Submit</button>
        
          </form>


         </Box>

         <IconBox>

           <img src={Logo} /> 
         </IconBox>
        
      </Main>
    )
  
  }
}
export default LandingPage;
