import React, {Component}  from 'react'
import styled from 'styled-components'
import background from './images/Background.svg'
import Ingredient from './components/Ingredient'
import PickPage from './components/PickPage'

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

class App extends Component {

    constructor(){
      super()

      this.state = {
        ingredients: ''
      };

    
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event){
      alert("Entered Ingredients " + this.state.ingredients)
      event.preventDefault();
      
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

          <form onSubmit = {this.handleSubmit}>
            <h1>Please enter ingredients</h1>
            <input type="text"
              placeholder="Ingredients"
              name="Ingredient"
              value={this.state.ingredients}
              onChange={this.handleChange}

              />

              <input type= "submit"   value="Submit" />
        
          </form>


         </Box>

        
        
      </Main>
    )
  }
}

export default App;
