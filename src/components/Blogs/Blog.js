import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PaperUI from '../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link, Divider } from '@material-ui/core';

const Blog = props => {
  const { title, pubDate, link, author, thumbnail } = props.story;
  return (
    <Fragment>
      <Grid item xs={12}>
        <img src={thumbnail} style={{ width: '100%' }} alt="medium-header" />
        <Link href={link}>
          <Typography variant="h5">{title}</Typography>
        </Link>
        <Typography variant="caption">Published on : {pubDate}</Typography>
        <Typography variant="subtitle1">{author}</Typography>
        <Divider />
      </Grid>
    </Fragment>
  );
};

class Blogs extends Component {
  state = { mediumFeed: [], authurData: {}, status: false };
  componentDidMount() {
    axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nana_adade'
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          mediumFeed: response.data.items,
          authurData: response.data.feed,
          status: true,
        });
      })
      .catch(error => {
        this.setState({
          status: false,
        });
      });
  }

  render() {
    const stories = this.state.mediumFeed;
    return (
      <PaperUI>
        <Typography variant="h5">Blog Posts</Typography>
        <Grid container style={{ overflowY: 'auto', height: 300 }}>
          {stories.map(story => {
            return <Blog key={story.guid} story={story} />;
          })}
        </Grid>
      </PaperUI>
    );
  }
}

export default Blogs;
