import React from "react"
import styled from "styled-components"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import ProfessionalSummary from "../components/resume-components/professional-summary"
import TechnicalSkills from "../components/resume-components/technical-skills"
import ProfessionalExperience from "../components/resume-components/professional-experience"
import Informations from "../components/resume-components/informations"
import Languages from "../components/resume-components/languages"
import Education from "../components/resume-components/education"
import OtherProjects from "../components/resume-components/other-projects"

const StyledContainer = styled.div`
  main {
    margin-top: 0.5rem;
    font-weight: 200;
    margin-bottom: 3rem;

    p {
      font-size: 1.6rem;
    }

    article:not(:last-child) {
      margin-bottom: 2rem;
    }

    section {
      background: #fff;
      margin-bottom: 2rem;
      padding: 2rem 2rem 3rem;
      border-top: 0.5rem solid hsl(217, 71%, 53%);
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
`

const IndexPage = () => (
  <StyledContainer>
    <SEO title="Andrea Valla" />
    <Layout>
      <div className="columns">
        {/*MAIN*/}
        <div className="column is-8">
          {/*PROFESSIONAL SUMMARY*/}
          <section className="section">
            <ProfessionalSummary />
          </section>
          {/*TECHNICAL SKILLS*/}
          <section className="section">
            <TechnicalSkills />
          </section>
          {/*PROFESSIONAL EXPERIENCE*/}
          <section className="section">
            <ProfessionalExperience />
          </section>
        </div>
        {/*SIDEBAR*/}
        <div className="column is-4">
          {/*INFORMATIONS*/}
          <section className="section">
            <Informations />
          </section>
          {/*LANGUAGES*/}
          <section className="section">
            <Languages />
          </section>
          {/*EDUCATION*/}
          <section className="section">
            <Education />
          </section>
          {/*OTHER PROJECTS*/}
          <section className="section">
            <OtherProjects />
          </section>
          {/*          <section className="section">
            <h2 className="title is-2">
              Console
            </h2>
            <article>
              <Console />
            </article>
          </section>*/}
        </div>
      </div>
    </Layout>
  </StyledContainer>
)

export default IndexPage
