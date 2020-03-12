import React from 'react';
import PaperUI from '../../UI/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import SKILLS from '../Skills/Skills.data';
import { Typography } from '@material-ui/core';

const Skill = props => {
  const { name, value } = props.skill;
  return (
    <div>
      <Typography>
        {name}({value}/100)
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        style={{ height: 10 }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <PaperUI>
      <Typography variant="h5">SKILLS</Typography>
      {SKILLS.map(SKILL => {
        return (
          <div style={{ marginTop: 20 }} key={SKILL.id}>
            <Skill skill={SKILL} />
          </div>
        );
      })}
    </PaperUI>
  );
};

export default Skills;
