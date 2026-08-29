import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { savePDF } from '../services/helpers';
import resume from '../data/resume';

const StyledHeader = styled.header`
  padding: 5rem 1rem 2.5rem;
  color: var(--ink);

  .header-inner {
    max-width: 1152px;
    margin: 0 auto;
    padding: 3rem 3.5rem;
    background: var(--paper);
    border-radius: 0.8rem;
    box-shadow: 0 1.2rem 3rem oklch(24% 0.04 255 / 0.14);
  }

  @media print {
    padding: 0 0 5mm;

    .header-inner {
      max-width: none;
      padding: 0 0 3mm;
      border-bottom: 1pt solid var(--accent);
      border-radius: 0;
      box-shadow: none;
    }
  }

  .title.is-1 {
    margin: 0;
    color: var(--ink);
    font-size: clamp(3.6rem, 6vw, 5.8rem);
    line-height: 1;
    letter-spacing: -0.06em;
  }

  .title .family-name {
    color: var(--accent);
  }

  .headline {
    max-width: 38ch;
    margin: 1.2rem 0 1.5rem;
    color: var(--muted);
    font-size: clamp(1.7rem, 2.4vw, 2.35rem);
    font-weight: 500;
    line-height: 1.3;
  }

  .contact-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1.3rem;
  }

  .contact-list li {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .actions {
    justify-content: flex-start;
    margin: 2rem 0 0;
  }

  @media screen and (max-width: 560px) {
    padding-top: 1rem;

    .header-inner {
      padding: 2.25rem 1.75rem;
    }
  }

  @media print {
    .title.is-1 {
      font-size: 25pt;
    }

    .headline {
      max-width: none;
      margin: 2mm 0;
      font-size: 11pt;
    }

    .contact-list {
      gap: 1mm 4mm;
      font-size: 8pt;
    }
  }
`;

const Header = ({ setShowConsole }) => {
  return (
    <StyledHeader>
      <div className="header-inner">
        <h1 className="title is-1">
          {resume.profile.givenName} <span className="family-name">{resume.profile.familyName}</span>
        </h1>
        <p className="headline">{resume.profile.headline}</p>
        <ul className="contact-list" aria-label="Contact details">
          <li>{resume.profile.location}</li>
          <li>
            <a href={`tel:${resume.profile.phone}`}>{resume.profile.phone}</a>
          </li>
          <li>
            <a href={`mailto:${resume.profile.email}`}>{resume.profile.email}</a>
          </li>
          <li>
            <a href={resume.profile.website}>avalla.github.io</a>
          </li>
          <li>
            <a href={resume.profile.social.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={resume.profile.social.github}>GitHub</a>
          </li>
        </ul>
        <div className="actions buttons print-hidden">
          <button
            type="button"
            className="button is-medium has-tooltip-arrow"
            data-tooltip="Open the console version"
            onClick={() => setShowConsole(true)}
          >
            <FontAwesomeIcon icon={faTerminal} size="1x" />
            &nbsp;
            <span>Console version</span>
          </button>
          <button type="button" className="button is-medium is-link" onClick={savePDF}>
            <FontAwesomeIcon icon={faFilePdf} size="1x" />
            &nbsp;
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  setShowConsole: PropTypes.func.isRequired,
};
export default Header;
