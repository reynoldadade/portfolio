import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import Grid from '@material-ui/core/Grid';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Skills from '../components/skills/Skills';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          <Contact />
        </Grid>
        <Grid item md={8} sm={12} xs={12} style={{ marginTop: 5 }}>
          <Projects />
        </Grid>
        <Grid item md={4} sm={12} xs={12} style={{ marginTop: 5 }}>
          <Skills />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <div>Work Experience</div>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <div>blog posts</div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Layout;
