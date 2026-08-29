import React from 'react';
import resume from '../../data/resume';

export default function SelectedProjects() {
  return (
    <section className="section selected-projects print-page-break" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="title is-2">
        Selected systems
      </h2>
      {resume.selectedProjects.map((project) => (
        <article className="project-item" key={project.name}>
          <header className="entry-header">
            <div>
              <h3 className="title is-3">
                <a href={project.url}>{project.name}</a>
              </h3>
              <p className="entry-organization">{project.role}</p>
            </div>
            <p className="entry-dates">{project.dates}</p>
          </header>
          <ul className="impact-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <p className="technology-line" aria-label="Technologies used">
            {project.technologies.join(' · ')}
          </p>
        </article>
      ))}
    </section>
  );
}
