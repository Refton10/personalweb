import React from 'react';

const SkillsProgressBar = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.name}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '100px',
                height: '20px',
                borderRadius: '4px',
                background: '#e5e5e5',
                marginRight: '10px',
              }}
            >
              <div
                style={{
                  width: `${skill.progress}%`,
                  height: '100%',
                  borderRadius: '4px',
                  background: skill.progress < 50 ? 'red' : skill.progress < 80 ? 'amber' : 'green',
                }}
              />
            </div>
            <div>{skill.name}</div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default SkillsProgressBar;
