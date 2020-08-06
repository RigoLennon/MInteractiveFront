import React from 'react';
import { Container,Grid } from '@material-ui/core';

import AppBarD from './components/AppBar';
import ScanButton from './components/ScanButton';

function App() {
  return (
    <div className="App">
      <AppBarD />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
          <h1>Bienvenido al menú interactivo</h1>
          <p>Para comenzar escanea el codigo QR de tu restaurante</p>
          <ScanButton />
      </Grid>
    </div>
  );
}

export default App;
