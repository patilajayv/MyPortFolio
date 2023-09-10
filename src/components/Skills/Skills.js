import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  // Calculate the midpoint index of the skillsData array
  const midpoint = Math.ceil(skillsData.length / 2);

  // Split skillsData into two separate arrays for two rows
  const firstRowSkills = skillsData.slice(0, midpoint);
  const secondRowSkills = skillsData.slice(midpoint);

  return (
    <div className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skillsRows">
          {/* First Row */}
          <div className="skill--scroll">
            <Marquee
              gradient={false}
              speed={120}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {firstRowSkills.map((skill, id) => (
                <div className="skill--box" key={id} style={skillBoxStyle}>
                  <img src={skillsImage(skill)} alt={skill} />
                  <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second Row */}
          <div className="skill--scroll">
            <Marquee
              gradient={false}
              speed={120}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {secondRowSkills.map((skill, id) => (
                <div className="skill--box" key={id} style={skillBoxStyle}>
                  <img src={skillsImage(skill)} alt={skill} />
                  <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
