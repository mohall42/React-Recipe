import React, { Component } from 'react'


export default class Ingredient extends Component {
    

    constructor(props) {
        const{name} = props;

        super(props)
    
        this.state = {
             name : name,
             checked : false,
             img : this.props.image
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name} = event.target
  
        if(event.target.checked === false){
  
          
          this.setState( prevState => ({
            choices: [...prevState.choices, name]
          })
          )
  
          event.target.checked = true 
          console.log(this.state.choices)
        }
        else{
  
          this.setState(prevState => ({
  
            choices: prevState.choices.filter(item => 
              {
                return (
                  <Ingredient name={item}   />
                )
              })
          }))
  
        }
       
      }
    
    render() {
        return (
            
             <label> 
                <input 
                type="checkbox"
                name={this.state.name}
                checked={this.state.checked}
                onChange= {this.handleChange}
                />
                {this.state.name}
            </label>
               
                
            
        )
    }
}
