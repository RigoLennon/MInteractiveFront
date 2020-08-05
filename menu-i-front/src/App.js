import React from 'react';
import { Container } from '@material-ui/core';

import AppBarD from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBarD />
      
      <Container fixed>

        <h1>Hola mundo</h1>

      </Container>
    </div>
  );
}

export default App;
