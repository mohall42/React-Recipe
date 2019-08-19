import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import background from '../images/Background.svg'

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

const apiKey = `${process.env.REACT_APP_FOOD2FORK_API_KEY}`;
const oldUrl = `https://www.food2fork.com/api/search`;   

export default class Picker extends Component {
    constructor(){
        super()
  
        this.state = {
            recipe: {},
            recieps: [],
            isLoading: false
        }
  
      }

    
      componentDidMount() {
        this.setState({isLoading: true})
        let url = new URL(oldUrl),
        params ={ key: `${apiKey}`, q:`${this.props.ingredients}`};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
          
          this.setState({
            recieps: data
          })

          console.log("recipes", data)}
          
          )
      }
   
  
    render() {
 
  
     
/* 
    componentDidMount(){
     /*  axios.get("https://api.spoonacular.com/recipes/random?number=1", {
        method: "GET",
        headers: {
           key: {apiKey},
         }
      }) */
    /*   axios.get("https://www.food2fork.com/api/search?key=befad3e27d98c5cef9a3d88aacf8ddc3&q=chicken%20breast&page=2")
      .then(res => {
        console.log(res)
      }) 
      
  
    }; */

    const Content = this.state.isLoading ? "Loading" : this.state.recieps

    return (
      <Main>
        <Box>

         
          {/* <h1>Pick Page</h1>
          <p>{` ${Ingredients} ${url}`}</p>
          {console.log("url", {url})}  */}

          <Content />
          

        </Box>
      </Main>
    )
  }
}
