import React, {Component}  from 'react'
import styled from 'styled-components'
import Conditional from './components/Conditional'




const FlexGrid = styled.div ` 

display: flex;

h1{
  font-size: 50px;
  margin-left: 2%;
}


`;



class App extends Component {

  constructor(){
    super()

    this.state = {
      isloading: false
    }

  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({ 
        isloading: false
      })
    })

  }

  render(){



    return (
      <FlexGrid>
        <h1>Hello World</h1>

        <Conditional isloading={this.state.isLoading} />
        
      </FlexGrid>
    )
  }
}

export default App;
