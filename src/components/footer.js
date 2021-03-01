import React from "react"
import styled from "styled-components"

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
  return (
    <StyledFooter className="footer">
      <div className="container">
        <section>
          <p className="print-only">
            Autorizzo il trattamento dei dati personali contenuti nel mio
            curriculum vitae in base all’art. 13 GDPR 679/16.
          </p>
          <p className="print-hidden">
            © 1980-{new Date().getFullYear()}
            {` `}
            Made in Italy with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>
            <span className="is-pulled-right">
              <a
                href="https://github.com/avalla/avalla.github.io"
                target="_blank"
                rel="noreferrer"
              >
                Sources
              </a>
            </span>
          </p>
        </section>
      </div>
    </StyledFooter>
  )
}

export default Footer
