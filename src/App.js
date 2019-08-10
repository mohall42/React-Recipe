import React, {Component}  from 'react'
import Conditional from './components/Conditional'


class App extends Component {

  constructor(){
    super()

    this.state = {
      isLoading: true
    }

  }
  
  componentDidMount(){
    fetch("https://api.spoonacular.com/recipes/random?number=1")
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
