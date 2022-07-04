import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import "bulma/css/bulma.css"
import "@creativebulma/bulma-tooltip/dist/bulma-tooltip.css"
import Footer from "../components/footer"
import Header from "../components/header"
import Console from "../components/console"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    @media print {
      font-size: 35% !important;
    }
  }

  body {
    padding-top: 3rem;
    background: #3273DC;
  }

  .print-hidden {
    @media print {
      display: none;
    }
  }

  .print-only {
    display: none;
    @media print {
      display: block;
    }
  }
  @media print {
    .pagebreak { page-break-before: always; }
    .section {
      border-top: none !important;
    }
    @page {
      margin-top: 0;
      margin-bottom: 0;
    }
    body {
      padding-top: 50px;
      padding-bottom: 50px ;
    }
  }
`

const StyledLayout = styled.div`
  background: linear-gradient(141deg, #f5fafc 0%, #e1f0f6 100%);

  [data-tooltip]:not(.is-loading)::before,
  [data-tooltip]:not(.is-disabled)::before,
  [data-tooltip]:not([disabled])::before {
    font-size: 12px;
  }
`

const Layout = ({ children }) => {
  const [showConsole, setShowConsole] = useState(false)
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header setShowConsole={setShowConsole} />
      {showConsole && <Console setShowConsole={setShowConsole} />}
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
