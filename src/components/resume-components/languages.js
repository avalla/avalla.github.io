import React from 'react';
import resume from '../../data/resume';

export default function Languages() {
  return (
    <section className="section languages" aria-labelledby="languages-heading">
      <h2 id="languages-heading" className="title is-2">
        Languages
      </h2>
      <p>
        {resume.languages.map(({ name, level }, index) => (
          <React.Fragment key={name}>
            {index > 0 && <span aria-hidden="true"> · </span>}
            <strong>{name}</strong> {level}
          </React.Fragment>
        ))}
      </p>
    </section>
  );
}
