import React, {Component}  from 'react'
import Conditional from './components/Conditional'



const apiKey = process.env.REACT_APP_SPOONFULL_API_KEY;

class App extends Component {

    constructor(){
      super()

      this.state = {
        isLoading: true,
        recipe: {},
        recipes: []
      }

    }

  
  componentDidMount(){
    fetch("https://api.spoonacular.com/recipes/random?number=10", {
       headers: {
         "Api-Key": {apiKey},
       }
    })
    .then(Response => console.log(Response))
    

  }

  render(){



    return (
      <div>
       
        {this.state.isLoading ? 
        
        <h1>Loading..</h1> :
        
        <h1>Hello World</h1>
        
         
         }

        
        
      </div>
    )
  }
}

export default App;
