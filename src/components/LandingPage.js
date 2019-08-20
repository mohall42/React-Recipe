import React, {Component} from 'react'
import styled from 'styled-components'
import background from '../images/Background.svg'

const Box = styled.div`
  
  display: flex;
  height: 500px;
  width: 1000px;
  margin: 10% auto;
  background: white;

`;

const Main = styled.div`


margin: 0;
height: 100vh;
width: 100vw;
background: url(${background}) no-repeat;
background-size: cover;
overflow: hidden;

`;

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
      <Main>
        
         <Box>

          <form >
            <h1>Please enter ingredients</h1>
            <input type="text"
              placeholder="Ingredients"
              name="Ingredient"
              value={this.state.ingredients}
              onChange={this.handleChange}

              />

              <button onClick={() => this.props.handleSubmit(this.state.ingredients)} >Submit</button>
        
          </form>


         </Box>
        
      </Main>
    )
  
  }
}
export default LandingPage;
