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

class App extends Component {

    constructor(){
      super()

      this.state = {
        ingredients: ["chicken", "cheese", "beef", "eggs", "bacon"],
        choices: []
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleIngredient = this.handleIngredient.bind(this)
     

    }

    handleIngredient= (name)=>{
      this.setState( prevState => ({
        choices: [...prevState.choices, name]
      }))

      console.log(this.state.choices)
    }


    
  render(){

      
      const Main = styled.div`


        margin: 0;
        height: 100vh;
        width: 100vw;
        background: url(${background}) no-repeat;
        background-size: cover;
        overflow: hidden;

      `;

      

    return (
      <Main>
        
         <Box>

          {this.state.ingredients.map( value => {
            return(

              <Ingredient key={value} name={value} addIngredient={this.handleIngredient}/>
            )
          })} 


          
          {/* <label> 
                <input 
                type="checkbox"
                name="Chicken"
                onChange= {this.handleChange }/>
                Chicken
            </label> */}

         </Box>

        
        
      </Main>
    )
  }
}

export default App;
