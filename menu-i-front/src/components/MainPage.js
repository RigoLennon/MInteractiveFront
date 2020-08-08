import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import CropFreeIcon from '@material-ui/icons/CropFree';

const styles = {
  bigIconArea: {
    width: "10em",
    height: "10em"
  },
  bigIcon: {
    width: "5em",
    height: "5em"
  },
  text:{
    textAlign: "center",
    padding: "1px"
  }
};

export default function MainPage() {
  return (
    <div>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h1>Main Page</h1>
            <div>
              <Link to="/list-product">
                <Button>
                  <CropFreeIcon style={styles.bigIcon}/>
                </Button>
              </Link>
            </div>
            <p>Presiona el boton para escanear el menu</p>
        </Grid>
    </div>
  );
}