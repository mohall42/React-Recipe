import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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

function App() {
  return(

    <Router>
      <Main>
        <LandingPage />

      </Main>

    </Router>
  )

    
}

export default App;
