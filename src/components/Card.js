import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'


const styles = {
  card: {
    position: 'absolute',
    maxWidth: '500',
    borderWidth: '4px',
    borderStyle: 'solid',
    border: ' 5px solid #000000',
    borderRadius: '10px',

  }
}

class RecipeCard extends Component {



  render() {

    const { body, image, title, link, zIndex = 0 } = this.props.fill;



    return (

      <Card className={{ ...styles.card, zIndex }}>
        <CardHeader title={title} />

        {/* <CardMedia src={image} title={title} /> */}

        <CardMedia>
          <img src={image} alt={title} />
        </CardMedia>
        <CardContent >
          <p>{body}</p>
        </CardContent>
      </Card>



    )
  }




} export default withStyles(styles)(RecipeCard);