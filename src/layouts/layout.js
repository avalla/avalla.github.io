import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import 'bulma/css/bulma.css';
import '@creativebulma/bulma-tooltip/dist/bulma-tooltip.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Console from '../components/console';

const GlobalStyle = createGlobalStyle`
  :root {
    --canvas: oklch(45% 0.14 255);
    --paper: oklch(98.5% 0.006 250);
    --ink: oklch(28% 0.03 255);
    --muted: oklch(49% 0.025 255);
    --accent: oklch(52% 0.18 255);
    --rule: oklch(88% 0.015 250);
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    margin: 0;
    background: var(--canvas);
    overflow-x: hidden;
  }

  a {
    color: var(--accent);
    text-underline-offset: 0.18em;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 3px solid oklch(78% 0.14 85);
    outline-offset: 3px;
  }

  .print-hidden {
    @media print {
      display: none;
    }
  }

  @media print {
    :root {
      --paper: oklch(99% 0.004 250);
    }

    html {
      font-size: 8px !important;
    }

    body {
      background: var(--paper);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    @page {
      size: A4;
      margin: 11mm 13mm;
    }
  }
`;

const StyledLayout = styled.div`
  min-height: 100vh;
  background: linear-gradient(145deg, oklch(96% 0.015 246) 0%, oklch(91% 0.035 242) 100%);

  .container {
    width: 100%;
    max-width: 1152px;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  [data-tooltip]:not(.is-loading)::before,
  [data-tooltip]:not(.is-disabled)::before,
  [data-tooltip]:not([disabled])::before {
    font-size: 12px;
  }

  @media print {
    min-height: 0;
    background: var(--paper);

    .container {
      max-width: none !important;
      padding: 0;
    }
  }
`;

const Layout = ({ children }) => {
  const [showConsole, setShowConsole] = useState(false);
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
