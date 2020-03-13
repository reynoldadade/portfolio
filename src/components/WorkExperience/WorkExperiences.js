import React from 'react';
import PaperUI from '../../UI/Paper';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import WORKEXPERIENCES from '../WorkExperience/WorkExperiences.data';

const WorkExperience = props => {
  const { company, role, startYear, endYear, functions } = props.WorkExperience;
  return (
    <div style={{ marginTop: '10px' }}>
      <Typography variant="h6" style={{ textAlign: 'left' }}>
        <strong>{role}</strong> {company} ({startYear} - {endYear})
      </Typography>
      <List dense>
        {functions.map(func => {
          return (
            <ListItem key={func.id}>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">{func.function}</Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

const WorkExperiences = () => {
  return (
    <PaperUI>
      <Typography variant="h5">Work Experience</Typography>
      {WORKEXPERIENCES.reverse().map(WORKEXPERIENCE => {
        return (
          <WorkExperience
            key={WORKEXPERIENCE.id}
            WorkExperience={WORKEXPERIENCE}
          />
        );
      })}
    </PaperUI>
  );
};

export default WorkExperiences;
