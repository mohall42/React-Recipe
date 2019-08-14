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
     

    }

    handleIngredient(name){
      this.setState( prevState => ({
        choices: [...prevState.choices, name]
      }))
    }


    handleChange(event){
      const {name} = event.target

      if(event.target.checked == false){

        
        this.setState( prevState => ({
          choices: [...prevState.choices, name]
        })
        )

        event.target.checked = true 
        console.log(this.state.choices)
      }
      else{

        this.setState(prevState => ({

          choices: prevState.choices.filter(item => 
            {
              return (
                <Ingredient name={item}   />
              )
            })
        }))

      }
     
      
    
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

         {/*  {this.state.ingredients.map( value => {
            return(

            <label key={value}> 
                <input 
                type="checkbox"
                name={value}
                onChange= {this.handleChange }/>
                {value}
            </label>
            )
          })} */}


          
          <label> 
                <input 
                type="checkbox"
                name="Chicken"
                onChange= {this.handleChange }/>
                Chicken
            </label>

         </Box>

        
        
      </Main>
    )
  }
}

export default App;
