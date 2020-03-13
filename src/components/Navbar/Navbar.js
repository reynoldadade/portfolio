import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../assets/images/Projects/profile.png';
import { red } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';
import {
  IconButton,
  Popper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
  },
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Navbar = () => {
  const classes = useStyles();

  //getPopper state
  const [anchorEl, setAnchorEl] = React.useState(null);
  //get click event to open popper
  const handlePopper = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  //get it of what i am clicking on
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" gutterBottom color="inherit">
            Portfolio
          </Typography>
          <IconButton onClick={handlePopper}>
            <Avatar alt="Remy Sharp" src={profile} />
          </IconButton>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            {/* this card can be changed to a component */}
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    RA
                  </Avatar>
                }
                title="Reynold Osei Adade"
                subheader="Front End Engineer"
              />
              <CardMedia
                className={classes.media}
                image={profile}
                title="Reynold Osei Adade"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  A path of a prgrammer is for one that is curious enough and
                  willing enough to fail as many as it takes to achieve
                  perfection
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/reynold-osei-adade-204479115/"
                  target="_blank">
                  <LinkedIn />
                </IconButton>
              </CardActions>
            </Card>
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
