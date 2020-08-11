import React from 'react';
import { 
  Grid,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

import { Link } from "react-router-dom";

export default class DetailProduct extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
              {
                "name": "Pizza Italiana",
                "description": "La clasica pizza italiana con peperoni y queso mozarella"
              }
            ],
            test: 'hola'
        }
    }

render() {
    return (
    <div>
        {this.state.data.map((dish, i) => 
            <h1 key = {i} data = {dish}>{this.props.data.name}</h1>
        )}
        <h1>{this.state.test}</h1>
    </div>
    );
}
}