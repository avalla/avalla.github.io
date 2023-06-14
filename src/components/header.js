import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { saveAs } from "file-saver"

const StyledHeader = styled.header`
  padding: 6rem 0 2rem;
  @media print {
    padding: 2rem 0;
  }

  .title.is-1 {
    letter-spacing: 1rem;
    margin-bottom: 2.5rem;
    font-size: 5rem;
  }

  .subtitle.is-3 {
    font-weight: 300;
  }
  .badges a:not(:last-child) {
    margin-right: 5px;
  }
`

const Header = ({ setShowConsole }) => {
  function onSave() {
    saveAs(
      "/resume.pdf",
      `avalla-resume-${new Date().getFullYear()}.pdf`
    )
  }
  return (
    <StyledHeader className="has-text-centered has-text-grey-dark is-uppercase">
      <h1 className="title is-1">
        Andrea <span className="has-text-link">Valla</span>
      </h1>
      <p className="subtitle is-3 is-uppercase">
        <small>Solution Architect - Full stack developer - BI developer</small>
      </p>
      <div className="badges buttons is-centered print-hidden">
        <a
          href="https://linkedin.com/in/avalla"
          aria-label="linkedin"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="linkedin"
            className="image"
            src="https://img.shields.io/badge/-Linkedin-%230a66c2?logo=linkedin"
          />
        </a>
        <a
          href="https://github.com/avalla"
          aria-label="github"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="github"
            className="image"
            src="https://img.shields.io/badge/-Github-black?logo=github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/avalla/"
          aria-label="stackoverflow"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="stackoverflow"
            className="image"
            src="https://img.shields.io/badge/-Stack%20Overflow-%23fafafb?logo=stackoverflow"
          />
        </a>
      </div>
      <div className="buttons is-centered print-hidden">
        <button
          type="button"
          className="button is-medium has-tooltip-arrow"
          data-tooltip="Console geek? Click here!"
          onClick={() => setShowConsole(true)}
        >
          <FontAwesomeIcon icon={faTerminal} size="1x" />
          &nbsp;
          <span>Console version</span>
        </button>
        <button type="button" className="button is-medium" onClick={onSave}>
          <FontAwesomeIcon icon={faFilePdf} size="1x" />
          &nbsp;
          <span>Download PDF</span>
        </button>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  setShowConsole: PropTypes.func.isRequired,
}
export default Header
