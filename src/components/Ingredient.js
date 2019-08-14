import React, { Component } from 'react'


export default class Ingredient extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : this.props.name,
             checked : false,
             img : this.props.image
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState(prevState => {
            this.state.checked = !prevState.checked
        })
        this.props.addIngredient(event.target.name)
    }
    render() {
        return (
            
             <label> 
                <input 
                type="checkbox"
                name={this.state.name}
                onChange= {this.handleChange}
                Chicken/>
            </label>
               
                
            
        )
    }
}
