import React from "react"
import styled from "styled-components"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import useResponsive from '../hooks/useResponsive';
import ProfessionalSummary from "../components/resume-components/professional-summary"
import KeyAchievements from "../components/resume-components/key-achievements"
import TechnicalSkills from "../components/resume-components/technical-skills"
import FavoriteStack from "../components/resume-components/favorite-stack"
import ProfessionalExperience from "../components/resume-components/professional-experience"
import Information from "../components/resume-components/information"
import Languages from "../components/resume-components/languages"
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

      @media print {
        margin-bottom: 1rem;
      }
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

const IndexPage = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <StyledContainer>
        <Seo title="Andrea Valla" />
        <Layout>
          <Information />
          <Languages />
          <ProfessionalSummary />
          <KeyAchievements />
          <ProfessionalExperience />
          <TechnicalSkills />
          <OtherProjects />
        </Layout>
      </StyledContainer>
    )
  }
  return (
    <StyledContainer>
      <Seo title="Andrea Valla" />
      <Layout>
        <div className="columns">
          {/*MAIN*/}
          <div className="column is-8">
            <ProfessionalSummary />
            <ProfessionalExperience />
            <TechnicalSkills />
          </div>
          {/*SIDEBAR*/}
          <div className="column is-4">
            <Information />
            <Languages />
            <KeyAchievements />
            <FavoriteStack />
            <OtherProjects />
            <p className="print-only">
              Autorizzo il trattamento dei dati personali contenuti nel mio
              curriculum vitae in base all’art. 13 GDPR 679/16.
            </p>
          </div>
        </div>
      </Layout>
    </StyledContainer>
  )
}

export default IndexPage
