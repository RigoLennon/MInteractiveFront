import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { IconButton, Typography, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ScanButton() {

  return (
    <div>
        <Box>
            <IconButton aria-label="delete" color="primary" size="large">
                <DeleteIcon />
            </IconButton>
        </Box>
    </div>
  );
}