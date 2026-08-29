import React from 'react';
import resume from '../../data/resume';

export default function ProfessionalSummary() {
  return (
    <section className="section summary" aria-labelledby="summary-heading">
      <h2 id="summary-heading" className="title is-2">
        Professional summary
      </h2>
      {resume.summary.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
