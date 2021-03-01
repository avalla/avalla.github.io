import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import Terminal from "react-console-emulator"
import styled from "styled-components"
import "jetbrains-mono"
import { savePDF } from "../../libs/helpers"
import pkg from "../../../package.json"

const VERSION = pkg.version
const WELCOME = `Welcome to the AV terminal emulator ${VERSION}
Please be careful, it's a beta release
Write "help" to get available commands`
const BIO = `
# Andrea Valla's bio
 
Experienced full stack programmer: developed enterprise level and scalable web applications. Experience in both client side and server side programming.
Background in all steps of software engineering including analysis, design, coding, testing and implementation.
Enjoy learning and staying current on bleeding edge technology, systems, libraries and frameworks.
Grown with shells, linux user since '95 :)
`
const CONTACTS = `
# Andrea Valla's contacts

- Birth date 9 august 1980, Turin, Italy
- Phone +39 335 82 30 421
- Email valla.andrea@gmail.com
- Website https://avalla.github.io
`

const SKILLS = `
# Andrea Valla's skills

- Frontend: React, Redux, Apollo, Gatsby, Gulp, Sass, Webpack
- Backend: NodeJs, Express, Koa, GraphQL, AspMVC, Php
- Mobile: iOS, basic knowledge of android development
- Testing: Jest, Cypress
- Languages: Javascript, C#, Swift, Php, Objective-C
- Tools: Docker, Lerna
- Databases: MongoDb, SqlServer, MySql, Sqlite, Oracle
- Business Intelligence: SSIS, SSRS, Pentaho Kettle, Cubejs
- Operating systems: Linux, Unix, MacOSX, Windows
- Devops: CI/CD with gitlab pipelines and github actions
- Cloud: Azure, AWS
`

/**
 * Generate a progress counter
 * @param onProgress - execute this function every progress change
 * @param onClean - execute this function after 100%
 * @param timeout - setInterval timeout, defaults to 5ms
 */
function progress({ onProgress, onClean, timeout = 5 }) {
  let counter = 0
  const interval = setInterval(() => {
    if (counter <= 100) {
      onProgress && onProgress(counter)
    } else {
      clearInterval(interval)
      onClean && onClean()
    }
    counter++
  }, timeout)
}

const StyledWrapper = styled.div`
  @media print {
    display: none;
  }

  .terminal {
    z-index: 1000;
    background-color: #151515;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    overflow-y: auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    * {
      font-family: "JetBrains Mono", monospace !important;
    }
  }

  .menu {
    width: 100%;
    box-sizing: border-box;
    height: 25px;
    background-color: #bbb;
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    .menu-buttons {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: 1px solid #000;
      position: relative;
      top: 1px;
      display: inline-block;
      cursor: pointer;

      &.close {
        left: 6px;
        background-color: #ff3b47;
        border-color: #9d252b;
      }
    }
    .menu-title {
      display: inline-block;
      line-height: 25px;
      margin-left: 15px;
    }
  }

  @media screen and (min-width: 1025px) {
    .terminal,
    .menu {
      max-width: 50vw;
      max-height: 70vh;
    }
  }
`

const Console = ({ setShowConsole }) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const terminal = useRef(null)
  const commands = {
    download: {
      description: "Download PDF version",
      fn: () => {
        terminal.current.pushToStdout(
          "Downloading PDF version, contacting remote server...."
        )
        setTimeout(() => {
          setIsDisabled(true)
          progress({
            onProgress: (counter) =>
              terminal.current.pushToStdout(`Progress: ${counter}%`),
            onClean: () => {
              setIsDisabled(false)
              savePDF()
            },
            timeout: 5,
          })
        }, 100)
      },
    },
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    show: {
      description: "Shows informations",
      usage: 'show <bio|contacts|skills>',
      fn: (type) => {
        switch (type) {
          case "bio":
            return BIO
          case "contacts":
            return CONTACTS
          case "skills":
            return SKILLS
          case "":
          case null:
          case undefined:
            return 'Please choose between "bio" and "contacts"'
          default:
            return "Error, type not recognized"
        }
      },
    },
    version: {
      description: "Prints current version",
      fn: () => `Version ${VERSION}`,
    },
    email: {
      description: "Sends me an email",
      fn: () => {
        setTimeout(
          () =>
            window.open(
              `mailto:valla.andrea@gmail.com?subject=Hello Andrea&body=Hi...`
            ),
          800
        )
        return "Opening your email client"
      },
    },
    exit: {
      description: "Close terminal",
      fn: () => {
        setTimeout(() => setShowConsole(false), 500)
        return "Bye bye..."
      },
    },
  }
  return (
    <StyledWrapper className="modal is-active">
      <div
        className="modal-background"
        role="button"
        onClick={() => setShowConsole(false)}
      />
      <div className="modal-content menu">
        <div
          className="menu-buttons close"
          role="button"
          onClick={() => setShowConsole(false)}
        />
        <div className="menu-title">AV Terminal Emulator</div>
      </div>
      <div className="terminal">
        <Terminal
          commands={commands}
          autoFocus
          welcomeMessage={WELCOME}
          ref={terminal}
          promptLabel={"me@box:~$"}
          disabled={isDisabled}
          locked={isDisabled}
        />
      </div>
    </StyledWrapper>
  )
}

Console.propTypes = {
  setShowConsole: PropTypes.func.isRequired,
}

export default Console
