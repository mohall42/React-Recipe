import React, { Component } from 'react'
import '../components/pick.css'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { Modal, List, ListItem, ListItemText } from '@material-ui/core'
import background from '../images/Background.svg'
import Swipeable from 'react-swipy'
import Button from './Buttons'
import Check from '../images/Check.svg'
import Loading from '../images/LOADING.svg'
import X from '../images/X.svg'
import RecipeCard from '../components/Card'
import Heart from '../images/Heart.svg'
import Error from '../images/error.svg'


const styles = {
  badge: {
    right: -5,
    width: `10px`,
    height: `20px`,
    fontSize: `5rem`,

  }


}

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


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}



class Picker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {},
      recipes: [],
      isLoading: true,
      open: false,
    }

    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }


  componentDidMount() {

    const Ingredients = this.props.Ingredients;

    this.setState({ isLoading: true })
    let url = new URL(oldUrl),
      params = { key: `${apiKey}`, q: `${Ingredients}` };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    fetch(url)
      .then(response => response.json())
      .then(data => {

        this.setState({
          recipes: data.recipes,
          isLoading: false,
          saved: []
        })

      }

      )
  }

  handleOpen = () => {


    this.setState({ open: true })

  }

  handleClose = () => {

    this.setState({ open: false })


  }


  remove = () => {
    this.setState(prevState => ({
      recipes: prevState.recipes.slice(1, prevState.recipes.length),
    }))

  }

  add = () => {
    this.setState(prevState => ({
      saved: [...prevState.saved, prevState.recipes[0]],
      recipes: prevState.recipes.slice(1, prevState.recipes.length)
    }))

    console.log(this.state.saved)

  }


  render() {




    if (this.state.isLoading) {

      return (

        <Main>

          {/*   <p>Loading...</p> */}
          {/* <Loading className="loadingSvg" /> */}
          <img className="loadingSvg" src={Loading} alt="Loading svg" />


        </Main>
      )
    }
    else {


      const { recipes } = this.state;
      const { classes } = this.props;




      const fill = recipes.length > 0 ? ({
        title: recipes[0].title,
        image: recipes[0].image_url,
        link: recipes[0].f2f_url,

      }) : ({
        title: "No more cards",
        image: Error,
        link: "None",
        zIndex: -2,

      });

      return (

        <Main>
          {recipes.length > 0 ? (
            <div>
              <Swipeable buttons={({ right, left }) => (
                <div className="buttonContainer">
                  <Button onClick={left} image={X} name={'x'}> </Button>
                  <Button onClick={right} image={Check} name={'check'}> </Button>
                </div>




              )}

                onSwipe={'left', this.remove}
                onSwipe={'right', this.add}

              >
                <div className="cardContainer">
                  <RecipeCard className="cardItem" fill={fill} />
                </div>
              </Swipeable>


            </div>

          ) : (

              <div className="cardContainer">

                {recipes.length <= 1 && <RecipeCard fill={fill} />}
              </div>
            )}


          <div className="heartContainer">
            {/*   <Badge badgeContent={this.state.saved.length} >

              <img src={Heart} alt="heart" />

            </Badge> */}

            <img src={Heart} alt="heart" onClick={this.handleOpen} />

          </div>

          <Modal aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            className={classes.modal}
          >

            <div className="modal-list">


              <List>
                {this.state.saved.map((item) => {
                  let { title, f2f_url } = item;


                  return (
                    <ListItemLink button href={f2f_url}>
                      <ListItemText primary={title} />
                    </ListItemLink>
                  )

                })}
              </List>

            </div>


          </Modal>


        </Main >
      )
    }

  }
}


export default withStyles(styles)(Picker)
