import React from 'react';
import { Star } from '@material-ui/icons';

const StarSpitter = props => {
  const number = props.number;
  let starArray = [];
  for (let i = 0; i < number; i++) {
    const starObject = {
      id: i,
    };
    starArray.push(starObject);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {starArray.map(star => {
        return <Star key={star.id} />;
      })}
    </div>
  );
};

export default StarSpitter;
