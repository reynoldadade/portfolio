import React, { Fragment } from 'react';
import PaperUI from '../../UI/Paper';
import { Typography } from '@material-ui/core';
import CERTICATIONS from '../Certifications/Certifications.data';

const Certification = props => {
  const { name, issuer, year } = props.certitication;
  return (
    <Fragment>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="caption">
        <strong> {issuer}</strong> {year}
      </Typography>
    </Fragment>
  );
};

const Certifications = () => {
  return (
    <PaperUI>
      <Typography variant="h5">Certifications</Typography>
      {CERTICATIONS.map(CERTICATION => {
        return (
          <Certification certitication={CERTICATION} key={CERTICATION.id} />
        );
      })}
    </PaperUI>
  );
};

export default Certifications;
