import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { LocationOn, Email, LinkedIn, GitHub } from '@material-ui/icons';
import classes from './Contact.module.css';
import PaperUI from '../../UI/Paper';

const github = 'Github';
const Contact = props => {
  return (
    <div>
      <PaperUI>
        <p className={classes.Paragraph}>
          <LocationOn className={classes.Icon} />
          <Typography>Accra, Ghana</Typography>
        </p>
        <p className={classes.Paragraph}>
          <Email className={classes.Icon} />
          <Typography>reynoldadade@gmail.com</Typography>
        </p>
        <p className={classes.Paragraph}>
          <LinkedIn className={classes.Icon} />
          <Link
            href="https://www.linkedin.com/in/reynold-osei-adade-204479115/"
            target="_blank">
            <Typography>reynoldadade</Typography>
          </Link>
        </p>
        <p className={classes.Paragraph}>
          <GitHub className={classes.Icon} />
          <Link href="https://github.com/reynoldadade" target="_blank">
            <Typography>reynoldadade</Typography>
          </Link>
        </p>
      </PaperUI>
    </div>
  );
};

export default Contact;
