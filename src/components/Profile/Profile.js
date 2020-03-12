import React, { Fragment } from 'react';
import PaperUI from '../../UI/Paper';
import { Typography } from '@material-ui/core';

const Profile = () => {
  return (
    <Fragment>
      <PaperUI>
        <Typography variant="body1">
          I have a passion for Front-end development, I have experience using
          AngularJS, Angular and now react I have used these technologies to
          build the front end of systems that pay an average of 20 million
          dollars a year, I have extensive experience leading technical teams
          and consultants including{' '}
          <strong>QA engineers and backend developers</strong>, I hoope to one
          day be able to teach less advantaged people the joys that can come
          from programming
        </Typography>
      </PaperUI>
    </Fragment>
  );
};

export default Profile;
