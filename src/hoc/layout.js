import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import Grid from '@material-ui/core/Grid';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';
import Certifications from '../components/Certifications/Certifications';
import Lang from '../components/Languages/Language';
import Blog from '../components/Blogs/Blog';

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
        <Grid item md={8} sm={12} xs={12}>
          <Projects />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Skills />
            </Grid>
            <Grid item xs={12}>
              <Certifications />
            </Grid>
            <Grid item xs={12}>
              <Lang />
            </Grid>
            <Grid item xs={12}>
              <Blog />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <div>Work Experience</div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Layout;
