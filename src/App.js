import React, {Component} from 'react'
import styled from 'styled-components'
import background from './images/Background.svg'
import LandingPage from './components/LandingPage'
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

function FormCheck(props){

  const {submitted, updateFormState} = props.formSubmitted;

  if(!submitted){
    return <LandingPage updateFormState = {updateFormState} />
  }

  return <PickPage />
}

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       formSubmitted: false
    }

    this.updateFormState = this.updateFormState.bind(this);
  }

  updateFormState(){

    this.setState({
      formSubmitted: true
    })
  }
  
  
  render(){

    return(
      <div>

       
      <FormCheck formSubmitted={this.state.formSubmitted} updateFormState={this.updateFormState} />

      </div>
        
  
    )

  }


    
}

export default App;
