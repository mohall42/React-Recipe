import React, { Component } from 'react'

export default class Picker extends Component {
    constructor(){
        super()
  
        this.state = {
            recipe: {},
            recieps: []
        }
  
      }

    
 

  render() {
 
  const URL = "https://www.food2fork.com/api/search";
  const Ingreadients = props.Ingreadients;
  const apiKey = process.env.REACT_APP_FOOD2FORK_API_KEY;
   

    
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
      }) */
      
  
    }; */


    return (
      <div>
        
      </div>
    )
  }
}
