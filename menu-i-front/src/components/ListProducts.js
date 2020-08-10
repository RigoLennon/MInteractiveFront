import React from 'react';
import { 
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import test from '../images/test.png';

  export default class Tester extends React.Component {

    constructor() {
       super();
     
       this.state = {
        data: [
          {
            "name": "Pizza Italiana",
            "description": "La clasica pizza italiana con peperoni y queso mozarella"
          },
          {
            "name": "Pizza Italiana 2",
            "description": "La clasica pizza italiana con peperoni y queso mozarella 2"
          }
        ]
     }
    }

    render() {

       return (
          <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          >
          <h1>Lista de productos</h1>

          {this.state.data.map((dish, i) => <Cards key = {i} 
                     data = {dish} />)}

      </Grid>
       );
    }
  }

  class Cards extends React.Component{
    render (){
      var root = {
        maxWidth: 345
        }

      var media = {
        height: 0,
        paddingTop: '56.25%', // 16:9
      }   
      return(
        <Card style = {root}>

                    <CardHeader
                      title={this.props.data.name}
                      subheader="Italian Pizza"
                      /*key={name}*/
                    />

                      <CardMedia
                        style= {media} 
                        image={test}
                        title='h'
                      />

                    <CardContent >
                      <Typography variant="body2" color="textSecondary">
                        {this.props.data.description}
                      </Typography>
                    </CardContent>
                    </Card>
      );
    }
  }
