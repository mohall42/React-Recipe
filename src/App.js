import React, {Component} from 'react'
import LandingPage from './components/LandingPage'
import PickPage from './components/PickPage'





class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       formSubmitted: false,
       submitArray:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  
   

  handleSubmit = (value) =>{
      
    /* event.preventDefault(); */

    this.setState({
      submitArray: value.split(' '),
      formSubmitted: true
    })

   
         
  }
 
  render(){
    
    if(!this.state.formSubmitted){
      return(
        <LandingPage handleSubmit = {this.handleSubmit} />
      )
    }
    else{

      return(
      
          <PickPage Ingredients={this.state.submitArray} />
    
      )
    }
  

  }

}

export default App;
