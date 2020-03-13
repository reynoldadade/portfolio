import { Paper } from '@material-ui/core';
import React from 'react';

const PaperUI = props => (
  <Paper style={{ marginTop: 20, padding: 15 }} elevation={0}>
    {props.children}
  </Paper>
);

export default PaperUI;
