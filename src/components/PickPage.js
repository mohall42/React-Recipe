import React, { Component } from 'react'
import styled from 'styled-components'
import background from '../images/Background.svg'
import Swipeable from 'react-swipy'
import Check from '../images/Check.svg'
import X from '../images/X.svg'
import Card from '../components/Card'

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
    constructor(props){
        super(props)
  
        this.state = {
            recipe: {},
            recieps: [],
            isLoading: false
        }
  
      }

    
      componentDidMount() {

       const Ingredients = this.props.Ingredients;

        this.setState({isLoading: true})
        let url = new URL(oldUrl),
        params ={ key: `${apiKey}`, q:`${Ingredients}`};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
        console.log("URL", url);

        fetch(url)
        .then(response => response.json())
        .then(data => {
          
          this.setState({
            recieps: data.recipes,
            isLoading: false
          })

          console.log("recipes", data.recipes)}
          
          )
      }

      remove = () => this.setState(({recieps}) => ({

        recieps : recieps.slice(1, recieps.length),
      }));
   
  
    render() {
 
    /* const content = this.state.isLoading ? "Loading" : this.state.recieps */

    /* const {recipes} = this.state; */
    
    
    if(this.state.isLoading){

      return(

        <Main>
        <Box>

         
        <p>Loading...</p>

        </Box>
      </Main>



      )
    }
    else{

   /*    const fill = {

        title: this.state.recieps[0].title,
        image: this.state.recieps[0].image_url,
        body: "figure this out in a sec",
        link: this.state.recieps[0].f2f_url

      } */

      const noMore = {
        title: "No more cards"

      }

      return (
        <Main>
          <Box>
  
           {this.state.recieps.length > 0 ? (

             

              <Swipeable buttons={({left, right}) => (
                  <div>
                    <button onClick={left}><image src={Check} /></button>
                    <button onClick={right}><image src={X} /></button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
              
              
              {/* <p>{this.state.recieps[0].publisher}</p> */}
              <Card title={this.state.recieps[0].title} image={this.state.recieps[0].image_url} link={this.state.recieps[0].f2f_url} />
                
              </Swipeable>

           ) : (

             <Card fill={noMore}/>
            )}
  
          </Box>
        </Main>
      )
    }

  }
}
