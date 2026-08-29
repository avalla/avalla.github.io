import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/layout';
import Seo from '../components/seo';
import ProfessionalSummary from '../components/resume-components/professional-summary';
import TechnicalSkills from '../components/resume-components/technical-skills';
import ProfessionalExperience from '../components/resume-components/professional-experience';
import EarlierExperience from '../components/resume-components/earlier-experience';
import Languages from '../components/resume-components/languages';
import SelectedProjects from '../components/resume-components/selected-projects';
import resume from '../data/resume';

const StyledContainer = styled.div`
  main {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(30rem, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    padding: 2rem 1rem 4rem;
    color: var(--ink);

    p {
      font-size: 1.5rem;
      line-height: 1.58;
    }

    .section {
      min-width: 0;
      width: 100%;
      margin: 0;
      padding: 2.5rem 2.75rem;
      background: var(--paper);
      border-top: 0.4rem solid var(--accent);
      border-radius: 0 0 0.8rem 0.8rem;
      box-shadow: 0 1.2rem 3rem oklch(24% 0.04 255 / 0.12);
    }

    .summary {
      grid-column: 1 / -1;
    }

    .experience,
    .earlier-experience {
      grid-column: 1;
    }

    .selected-projects,
    .technologies,
    .languages {
      grid-column: 2;
    }

    .selected-projects {
      grid-row: 2;
    }

    .technologies {
      grid-row: 3;
    }

    .languages {
      grid-row: 4;
    }

    .earlier-experience {
      grid-row: 3 / span 2;
    }

    .title.is-2 {
      margin: 0 0 1.8rem;
      color: var(--ink);
      font-size: 2.5rem;
      letter-spacing: -0.04em;
    }

    .title.is-3 {
      margin: 0;
      color: var(--ink);
      font-size: 1.75rem;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }

    .summary p {
      max-width: 76ch;
      font-size: 1.7rem;
    }

    .summary p:last-child,
    .earlier-item p:last-child,
    .languages p {
      margin-bottom: 0;
    }

    .experience-item,
    .project-item,
    .earlier-item {
      break-inside: avoid;
    }

    .experience-item:not(:last-child),
    .project-item:not(:last-child),
    .earlier-item:not(:last-child) {
      margin-bottom: 2.5rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid var(--rule);
    }

    .entry-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1.5rem;
      margin-bottom: 1rem;
    }

    .entry-header > div {
      min-width: 0;
    }

    .entry-header,
    .entry-organization,
    .impact-list,
    .technology-line,
    .technology-groups dd {
      overflow-wrap: anywhere;
    }

    .entry-organization,
    .entry-dates {
      margin: 0.35rem 0 0;
      color: var(--muted);
      font-size: 1.25rem;
      line-height: 1.4;
    }

    .entry-organization a {
      font-weight: 650;
    }

    .entry-dates {
      flex: 0 0 auto;
      text-align: right;
      font-weight: 600;
    }

    .impact-list {
      margin: 0.8rem 0 1rem 1.8rem;
      font-size: 1.45rem;
      line-height: 1.5;
    }

    .impact-list li {
      padding-left: 0.25rem;
    }

    .impact-list li:not(:last-child) {
      margin-bottom: 0.55rem;
    }

    .technology-line {
      margin: 1rem 0 0;
      color: var(--muted);
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.45;
    }

    .technology-groups {
      margin: 0;
    }

    .technology-groups div:not(:last-child) {
      margin-bottom: 1.25rem;
    }

    .technology-groups dt {
      color: var(--ink);
      font-size: 1.35rem;
      font-weight: 700;
    }

    .technology-groups dd {
      margin: 0.25rem 0 0;
      color: var(--muted);
      font-size: 1.35rem;
      line-height: 1.5;
    }

    @media screen and (max-width: 900px) {
      display: block;

      .section:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }

    @media screen and (max-width: 560px) {
      padding: 1rem 0 3rem;

      .section {
        padding: 2rem 1.75rem;
      }

      .entry-header {
        display: block;
      }

      .entry-dates {
        text-align: left;
      }

      .impact-list {
        margin-left: 1.5rem;
      }
    }

    @media print {
      display: block;
      padding: 0;

      .section {
        padding: 0;
        border: 0;
        border-radius: 0;
        box-shadow: none;
      }

      .section:not(:last-child) {
        margin-bottom: 4mm;
      }

      .summary p {
        max-width: none;
        font-size: 9.4pt;
        line-height: 1.38;
      }

      .title.is-2 {
        margin-bottom: 2.5mm;
        padding-bottom: 1mm;
        border-bottom: 0.5pt solid var(--rule);
        font-size: 14pt;
      }

      .title.is-3 {
        font-size: 10pt;
      }

      .experience-item:not(:last-child),
      .project-item:not(:last-child),
      .earlier-item:not(:last-child) {
        margin-bottom: 3mm;
        padding-bottom: 3mm;
      }

      .entry-header {
        margin-bottom: 1.5mm;
      }

      .entry-organization,
      .entry-dates {
        margin-top: 0.5mm;
        font-size: 8pt;
      }

      .impact-list {
        margin: 1.5mm 0 1.5mm 5mm;
        font-size: 8.7pt;
        line-height: 1.32;
      }

      .impact-list li:not(:last-child) {
        margin-bottom: 0.8mm;
      }

      .technology-line {
        margin-top: 1.5mm;
        font-size: 7.7pt;
      }

      .selected-projects {
        break-before: page;
      }

      .earlier-item p:last-child,
      .technology-groups dd,
      .languages p {
        font-size: 8.5pt;
        line-height: 1.35;
      }

      .technology-groups {
        columns: 2;
        column-gap: 8mm;
      }

      .technology-groups div {
        break-inside: avoid;
      }

      .technology-groups div:not(:last-child) {
        margin-bottom: 1.5mm;
      }

      .technology-groups dt {
        font-size: 8.5pt;
      }

      .technology-groups dd {
        margin-top: 0;
      }
    }
  }
`;

const IndexPage = () => (
  <StyledContainer>
    <Seo title="Staff-level Product Engineer" description={resume.seoDescription} />
    <Layout>
      <ProfessionalSummary />
      <ProfessionalExperience />
      <SelectedProjects />
      <EarlierExperience />
      <TechnicalSkills />
      <Languages />
    </Layout>
  </StyledContainer>
);

export default IndexPage;
