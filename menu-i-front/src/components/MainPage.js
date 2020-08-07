import React from 'react';
import { Grid } from '@material-ui/core';

import ScanButton from './ScanButton';

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
            <ScanButton />
        </Grid>
    </div>
  );
}