import React from 'react';
import resume from '../../data/resume';

export default function EarlierExperience() {
  return (
    <section className="section earlier-experience" aria-labelledby="earlier-heading">
      <h2 id="earlier-heading" className="title is-2">
        Earlier experience
      </h2>
      {resume.earlierExperience.map((experience) => (
        <article className="earlier-item" key={`${experience.company}-${experience.dates}`}>
          <header className="entry-header">
            <div>
              <h3 className="title is-3">{experience.role}</h3>
              <p className="entry-organization">
                {experience.company}
                <span className="entry-location"> · {experience.location}</span>
              </p>
            </div>
            <p className="entry-dates">{experience.dates}</p>
          </header>
          <p>{experience.summary}</p>
        </article>
      ))}
    </section>
  );
}
