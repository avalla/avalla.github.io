import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import resume from '../data/resume';

const StyledFooter = styled.footer`
  margin: 0;
  padding: 2.5rem 1.5rem;
  background: var(--ink);
  color: var(--paper);
  font-size: 1.2rem;
  a {
    color: var(--paper);
  }
  @media print {
    display: none;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <p>
          © {new Date().getFullYear()} {resume.profile.name}
          <span className="is-pulled-right">
            <a
              href="https://github.com/avalla/avalla.github.io"
              target="_blank"
              rel="noreferrer"
              aria-label="CV source on GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </span>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
