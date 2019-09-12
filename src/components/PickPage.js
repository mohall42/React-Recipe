import React, { Component } from 'react'
import '../components/pick.css'
import styled from 'styled-components'
import background from '../images/Background.svg'
import Swipeable from 'react-swipy'
import Button from './Buttons'
import Check from '../images/Check.svg'
import Loading from '../images/LOADING.svg'
import X from '../images/X.svg'
import Card from '../components/Card'



const Main = styled.div`


margin: 0;
height: 100vh;
width: 100vw;
background: url(${background}) no-repeat;
background-size: cover;
overflow: hidden;

`;

const apiKey = `befad3e27d98c5cef9a3d88aacf8ddc3`;
const oldUrl = `https://www.food2fork.com/api/search`;   

export default class Picker extends Component {
    constructor(props){
        super(props)
  
        this.state = {
            recipe: {},
            recipes: [],
            isLoading: true
        }
  
      }

    
      componentDidMount() {

       const Ingredients = this.props.Ingredients;

        this.setState({isLoading: true})
        let url = new URL(oldUrl),
        params ={ key: `${apiKey}`, q:`${Ingredients}`};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
      

        fetch(url)
        .then(response => response.json())
        .then(data => {
          
          this.setState({
            recipes: data.recipes,
            isLoading: false
          })
        
          }
          
        )
      }

      remove = () => this.setState(({recipes}) => ({

        recipes : recipes.slice(1, recipes.length),
      }));
   
  
    render() {
 
    


    if(this.state.isLoading){

      return(

        <Main>
        
        {/*   <p>Loading...</p> */}
          {/* <Loading className="loadingSvg" /> */}
          <img className="loadingSvg" src={Loading} alt="Loading svg" />

        
        </Main>
      )
    }
    else{

      
      const {recipes} = this.state;
      return (

        <Main>
           {recipes.length > 0 && (
             <div>
                <Swipeable buttons={({right, left}) => (
                    <div className="buttonContainer">

                      <Button onClick={left} image={X}  name={'x'}> </Button>
                  
                      <Button onClick={right} image={Check}  name={'check'}> </Button>
                    
                    </div>
                  )}

                  onAfterSwipe={this.remove}
                >
              <div className="cardContainer">

                <Card className="cardItem" 
                      title={recipes[0].title} 
                      image={recipes[0].image_url} 
                      link={recipes[0].f2f_url} > 
                      
                </Card>

              </div>              
                
              </Swipeable>
                
              {/*  {recipes.length > 1 && 
                    <Card className = "cardItem" 
                    zIndex={-1}
                    
                    title={recipes[1].title} 
                    image={recipes[1].image_url} 
                    link={recipes[1].f2f_url} > </Card>  }
 */}
             </div>

           )} 
           
           {/*  <Box>

             <Card className="cardItem" zIndex={-2} title={"No more cards"}/>
            </Box */}>
            
          
        </Main>
      )
    }

  }
}
