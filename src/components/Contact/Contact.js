import React from 'react';
import { Typography } from '@material-ui/core';
import { LocationOn, Email } from '@material-ui/icons';
import classes from './Contact.module.css';
import PaperUI from '../../UI/Paper';

const Contact = () => {
  return (
    <PaperUI>
      <Typography variant="h5">Contact</Typography>
      <Typography className={classes.Paragraph} variant="body1">
        <LocationOn className={classes.Icon} />
        Accra, Ghana
      </Typography>
      <Typography className={classes.Paragraph}>
        <Email className={classes.Icon} />
        reynoldadade@gmail.com
      </Typography>
    </PaperUI>
  );
};

export default Contact;
