import React from 'react';
import resume from '../../data/resume';

const Experience = ({ experience }) => (
  <article className="experience-item">
    <header className="entry-header">
      <div>
        <h3 className="title is-3">{experience.role}</h3>
        <p className="entry-organization">
          {experience.companyUrl ? <a href={experience.companyUrl}>{experience.company}</a> : experience.company}
          {experience.descriptor && `, ${experience.descriptor}`}
          <span className="entry-location"> · {experience.location}</span>
        </p>
      </div>
      <p className="entry-dates">{experience.dates}</p>
    </header>
    <ul className="impact-list">
      {experience.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
    <p className="technology-line" aria-label="Technologies used">
      {experience.technologies.join(' · ')}
    </p>
  </article>
);

export default function ProfessionalExperience() {
  return (
    <section className="section experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="title is-2">
        Professional experience
      </h2>
      {resume.experience.map((experience) => (
        <Experience key={`${experience.company}-${experience.dates}`} experience={experience} />
      ))}
    </section>
  );
}
