import React, { Component } from 'react'
import styled from 'styled-components'
import background from '../images/Background.svg'
import Logo from '../images/logo.svg'

const Box = styled.div`
  
  background: white;
  display: flex;
  justify-content: center;
  border: 5px solid #000000;

  min-height: 500px;
  min-width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  -webkit-border-radius: 5px;
  border-radius: 10px;

  input[type=text], button {
    display: block;
    height: 30px;
    width: 400px;
    border:2px solid #ccc; 
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 30% auto;
    
}

`;

Box.displayName = 'Box'

const IconBox = styled.div` 

  position: absolute;
  bottom: 0;
  right: 0;
  margin: 2% 2%;


`;

const Main = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat;
  background-size: cover;
  overflow: hidden;
  font-family: 'Pacifico', cursive;
  

`;

Main.displayName = 'Main';

class LandingPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ingredients: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({
      ingredients: event.target.value
    })
  }


  render() {
    return (
      <Main>

        <Box>

          <form >
            <h1 className='title' >Please enter ingredients</h1>
            <input type="text"
              placeholder="Ingredients"
              name="Ingredient"
              value={this.state.ingredients}
              onChange={this.handleChange}

            />

            <button onClick={() => this.props.handleSubmit(this.state.ingredients)} >Submit</button>

          </form>


        </Box>

        <IconBox>

          <img className="logo" src={Logo} alt="logo" />
        </IconBox>

      </Main>
    )

  }
}
export default LandingPage;
