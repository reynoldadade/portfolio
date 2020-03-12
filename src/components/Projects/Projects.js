import React, { Fragment } from 'react';
import PROJECTS from '../Projects/projects.data';
import { Typography, Grid, Link, IconButton, Divider } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import PaperUI from '../../UI/Paper';

const Project = props => {
  const { name, description, githubLink, url, image } = props.project;
  return (
    <Fragment>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={4}>
          <Link href={url} target="_blank">
            <img src={image} alt={name} style={{ width: 200, height: 120 }} />
          </Link>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" style={{ textAlign: 'left' }}>
            <Link href={url}>{name}</Link>
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {description}
          </Typography>
          <Link href={githubLink} target="_blank">
            <IconButton edge="start">
              <GithubIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
      <Divider />
    </Fragment>
  );
};

const Projects = () => (
  <Fragment>
    <PaperUI>
      {PROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </PaperUI>
  </Fragment>
);

export default Projects;
