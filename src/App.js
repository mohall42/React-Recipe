import React, {Component} from 'react'
import styled from 'styled-components'
import background from './images/Background.svg'
import LandingPage from './components/LandingPage'
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

    alert(this.state.submitArray)
         
  }
 
  render(){
    
    if(!this.state.formSubmitted){
      return(
        <LandingPage handleSubmit = {this.handleSubmit} />
      )
    }
    else{

      return(
      
          <PickPage />
    
      )
    }
  

  }

}

export default App;
