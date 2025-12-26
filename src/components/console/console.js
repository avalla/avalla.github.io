import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import Terminal from "react-console-emulator"
import styled from "styled-components"
import "jetbrains-mono"
import { savePDF } from "../../services/helpers"
import pkg from "../../../package.json"

const VERSION = pkg.version
const WELCOME = `Welcome to the AV terminal emulator ${VERSION}
Please be careful, it's a beta release
Write "help" to get available commands`

const BIO = `
# Andrea Valla's bio

Product / Full-Stack Engineer with 20+ years of experience building complex end-to-end systems, integrations, and
AI-enabled platforms.
Thrives in small teams with real ownership and responsibility for architecture through production.
Grown with shells, linux user since '95 :)
`
const CONTACTS = `
# Andrea Valla's contacts

- Birth date 9 august 1980, Turin, Italy
- Phone +39 335 82 30 421
- Email valla.andrea@gmail.com
- Website https://avalla.github.io
- Github https://github.com/avalla
- Linkedin https://www.linkedin.com/in/avalla/
- Stackoverflow https://stackoverflow.com/users/876314/avalla
`

const SKILLS = `
# Andrea Valla's skills

- Languages: JavaScript, TypeScript, C#, Swift, PHP
- Frontend: React, Gatsby, Redux, Apollo, Urql, Tailwind, Vite
- Backend & Services: Node.js, Express, Koa, GraphQL, Moleculer, Bun, Deno
- Data / AI / BI: BigQuery, Airbyte, Cube.js, LangChain
- Databases: PostgreSQL, MongoDB, SQL Server, MySQL
- DevOps / Cloud: Docker, GitHub Actions, GitLab CI, AWS, GCP, Azure
- Operating systems: macOS, Linux, Unix, Windows
`

const PROJECTS = `
# Andrea Valla's projects

- AutoEpoque (BrandsDistribution): https://dev.autoepoque.com
  Marketplace for vintage cars with auctions and listings (Supabase, React, pgTAP)

- Recalibra (2025)
  Mobile app for vagus nerve stimulation therapy (React Native) - in development

- Malingering (2020): https://malingering.netlify.app
  Psychological tests effectiveness analysis (Gatsby, React, Redux, FaunaDB)

- Sphere Contents (2020): https://spherecontents.com/
  IPs browser for movies/serials/books/comics (Gatsby, React, Redux, Algolia, Wordpress)
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
      description: "Shows information",
      usage: 'show <bio|contacts|skills|projects>',
      fn: (type) => {
        switch (type) {
          case "bio":
            return BIO
          case "contacts":
            return CONTACTS
          case "skills":
            return SKILLS
          case "projects":
            return PROJECTS
          case "":
          case null:
          case undefined:
            return 'Please choose between "bio", "contacts", "skills" and "projects"'
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
