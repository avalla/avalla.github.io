import React from 'react';
import resume from '../../data/resume';

export default function TechnicalSkills() {
  return (
    <section className="section technologies" aria-labelledby="technologies-heading">
      <h2 id="technologies-heading" className="title is-2">
        Core technologies
      </h2>
      <dl className="technology-groups">
        {resume.technologies.map(({ category, items }) => (
          <div key={category}>
            <dt>{category}</dt>
            <dd>{items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
