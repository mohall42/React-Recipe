import React, {Component}  from 'react'
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

class LandingPage extends Component {

    constructor(){
      super()

      this.state = {
        ingredients: '',
        submitArray:[]
      };

    
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = (event)=>{
      
      event.preventDefault();
      this.setState({
        submitArray: this.state.ingredients.split(' ')
      })

      alert(this.state.submitArray)

      this.props.updateFormState();
    
      
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

              <button type= "Submit" onClick={this.handleSubmit} >Submit</button>
        
          </form>


         </Box>

        
        
      </Main>
    )
  }
}

export default LandingPage;
