import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useMetadata from '../hooks/useMetadata';

const StyledFooter = styled.footer`
  font-size: 1.6rem;
  background-color: #2c4059;
  color: white;
  padding: 3rem 1.5rem;
  a {
    color: #ddd;
  }
  @media print {
    padding-bottom: 0;
    //position:fixed;
    //bottom:0;
  }
`
const Footer = () => {
  const { contacts } = useMetadata();
  return (
    <StyledFooter className="footer">
      <div className="container">
        <section>
          <p className="print-only">
            Autorizzo il trattamento dei dati personali contenuti nel mio
            curriculum vitae in base all’art. 13 GDPR 679/16.
          </p>
          <p className="print-hidden">
            Andrea Valla
            <br />
            <a href={`tel:${contacts.phone}`} aria-label="phone">
              <small>
                <FontAwesomeIcon icon={faPhone} size="1x" /> {contacts.phone}
              </small>
            </a>
            <br />
            <a href={`mailto:${contacts.email}`} aria-label="mail">
              <small>
                <FontAwesomeIcon icon={faEnvelope} size="1x" /> {contacts.email}
              </small>
            </a>
          </p>
          <p className="print-hidden">
            <span className="has-text-white-bis" style={{ fontSize: 10 }}>
            © {new Date().getFullYear()}
              {` `}
              Made in Italy with{" "}
              <span role="img" aria-label="love">
              ❤️
            </span>
            </span>
            <span className="is-pulled-right">
              <a
                href="https://github.com/avalla/avalla.github.io"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </span>
          </p>
        </section>
      </div>
    </StyledFooter>
  )
}

export default Footer
