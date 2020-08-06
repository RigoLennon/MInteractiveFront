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
        justify="flex-start"
        alignItems="center"
        >
          <h1>Hola mundo2</h1>
          <ScanButton />
        </Grid>
    </div>
  );
}

export default App;
