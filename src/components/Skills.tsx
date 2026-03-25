import React from 'react';

const Skills: React.FC = () => {
  const skills = ['TypeScript', 'React', 'HTML', 'CSS'];

  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <ul>
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <p>My goal is to use these skills to build an app that helps people.</p>
    </section>
  );
};

export default Skills;
