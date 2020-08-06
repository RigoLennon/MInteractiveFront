import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { IconButton, Typography, Box, Button, Container } from '@material-ui/core';
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

export default function ScanButton() {
  return (
    <div>
      <Button>
      <CropFreeIcon style={styles.bigIcon}/>
      </Button>
      <p style={styles.text}>Escanear</p>
    </div>
  );
}