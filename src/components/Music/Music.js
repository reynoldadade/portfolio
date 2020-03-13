import React from 'react';
import PaperUI from '../../UI/Paper';
import { CardMedia, Typography, Card } from '@material-ui/core';
import MUSICS from '../Music/Music.data';

const Musics = props => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <CardMedia
        width="560"
        height="315"
        src={props.link}
        component="iframe"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></CardMedia>
    </Card>
  );
};

const Music = () => {
  return (
    <PaperUI>
      <Typography variant="h5">Music</Typography>
      <div style={{ overflowY: 'auto', height: 600 }}>
        {MUSICS.map(MUSIC => {
          return <Musics key={MUSIC.id} link={MUSIC.link} />;
        })}
      </div>
    </PaperUI>
  );
};

export default Music;
