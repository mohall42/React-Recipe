import React, {Component}  from 'react'
import styled from 'styled-components'
import background from './images/Background.svg'
import Bite from './images/Bite.svg'
import axios from 'axios'
import Conditional from './components/Conditional'








class App extends Component {

    constructor(){
      super()

      this.state = {
        choices: []
      }

      this.handleChange = this.handleChange.bind(this)

    }

  
    handleChange(event) {
      const {name} = event.target

      this.setState( prevState => ({
        choices: [...prevState.choices, name]

        
      }))
      
    
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
        
       
        {/* {this.state.isLoading ? 
        
        <h1>Loading..</h1> :
        
        <h1>Hello World</h1>
        
         
         } */}

         <label> 
          <input 
          type="checkbox" name="chicken"
          onChange={this.handleChange} />
          Chicken
         </label>

        
        
      </Main>
    )
  }
}

export default App;
