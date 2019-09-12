import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'


const styles = {
  card: {
    maxWidth: '500',
    borderWidth: '4px',
    borderStyle: 'solid',
  }
}

class RecipeCard extends Component {



  render() {

    const { body, title, image, link } = this.props.fill;



    return (

      <Card className={styles.card}>
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
