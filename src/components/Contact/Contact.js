import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { LocationOn, Email, LinkedIn, GitHub } from '@material-ui/icons';
import classes from './Contact.module.css';
import PaperUI from '../../UI/Paper';

const Contact = () => {
  return (
    <PaperUI>
      <Typography className={classes.Paragraph} variant="body1">
        <LocationOn className={classes.Icon} />
        Accra, Ghana
      </Typography>
      <Typography className={classes.Paragraph}>
        <Email className={classes.Icon} />
        reynoldadade@gmail.com
      </Typography>
      <Typography className={classes.Paragraph}>
        <LinkedIn className={classes.Icon} />
        <Link
          href="https://www.linkedin.com/in/reynold-osei-adade-204479115/"
          target="_blank">
          reynoldadade
        </Link>
      </Typography>
      <Typography className={classes.Paragraph}>
        <GitHub className={classes.Icon} />
        <Link href="https://github.com/reynoldadade" target="_blank">
          reynoldadade
        </Link>
      </Typography>
    </PaperUI>
  );
};

export default Contact;
