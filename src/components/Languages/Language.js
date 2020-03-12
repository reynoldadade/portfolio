import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import LANGUAGES from '../Languages/Languages.data';
import PaperUI from '../../UI/Paper';
import StarSpitter from '../../UI/StarSpitter';
import { Divider } from '@material-ui/core';

const Language = props => {
  const { name } = props.language;
  return <Typography variant="body1">{name}</Typography>;
};

const Languages = () => {
  return (
    <PaperUI>
      <Typography variant="h5">Languages</Typography>
      {LANGUAGES.map(LANGUAGE => {
        return (
          <div key={LANGUAGE.id}>
            <Language language={LANGUAGE} />
            <StarSpitter number={LANGUAGE.proficiency} />
            <Divider />
          </div>
        );
      })}
    </PaperUI>
  );
};

export default Languages;
