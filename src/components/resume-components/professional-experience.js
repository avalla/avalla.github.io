import React from "react"

export default function ProfessionalExperience() {
  return (
    <>
      <h2 className="title is-2">Professional experience</h2>
      {/*INDUSTRIAL CLOUD*/}
      <article>
        <h4 className="title is-4 is-uppercase">
          Solution architect and full stack developer ::{" "}
          <small className="has-text-weight-light">June 2015 - Today</small>
        </h4>
        <p className="subtitle is-5 is-uppercase">
          <a href="https://www.industrial-cloud.com">Industrial Cloud</a>
          {" - "}
          Politecnico di Torino Spinoff Company
          {" :: "}
          <small className="has-text-weight-light">Turin, Italy</small>
        </p>
        <p>
          Developed web applications for the manufacturing industry, created an
          internal infrastructure with CI/CD using self-hosted Gitlab. PM using
          GitLab issues and milestones.
        </p>
        <p>
          Last project is&nbsp;
          <a
            href="https://stackshare.io/agile-factory/agile-factory"
            rel="noreferrer"
            target="_blank"
          >
            Agile Factory
          </a>
          , a MES solution for SMEs. It helps manufacturing industries to
          accelerate their production processes, showing workers and machine
          data in realtime. Agile Factory is connected to IIOT devices via MQTT
          or OPC-UA and communicates with customer's ERPs.
        </p>
        {/*<p>*/}
        {/*  As the only developer I made several choices to make my work faster,*/}
        {/*  for example every customer has different customizations, so I*/}
        {/*  developed a basic plugin system similar to Wordpress Hooks. Another*/}
        {/*  issue was related to application end to end testing and manual*/}
        {/*  generation, I used Cypress for end-to-end testing and take screenshots*/}
        {/*  then Docusaurus to generate user's manual. I'm also responsible for*/}
        {/*  customer deployments, upgrades, customization and bug fixing. I*/}
        {/*  also learned how to create and communicate with OPC-UA servers. The*/}
        {/*  application is also installable with an installer that is usable on*/}
        {/*  clean linux installation. It will install all packages needed (nginx,*/}
        {/*  redis, mongo, etc), then configure them.*/}
        {/*</p>*/}
        <p className="is-italic">
          NodeJs, GraphQL, React, Jest, Cypress, Apollo, Redux, Elastic Search,
          Mysql, MongoDb, Redis, Gitlab, Docker, Mqtt, OPC-UA, S3, Lerna,
          Kettle, Sonarqube
        </p>
      </article>
      <hr />
      {/*INTESA SANPAOLO*/}
      <article>
        <h4 className="title is-4 is-uppercase">
          Full stack developer ::{" "}
          <small className="has-text-weight-light">
            September 2010 - June 2015
          </small>
        </h4>
        <p className="subtitle is-5 is-uppercase">
          Intesa SanPaolo
          {" :: "}
          <small className="has-text-weight-light">
            Moncalieri (Turin), Italy
          </small>
        </p>
        <p>
          Developed web interfaces, ETL and reports on Microsoft environment.
        </p>
        <p className="is-italic">
          .net, Javascript, EF, Dapper, SqlServer, SSRS, SSIS, ASPMVC, WebForms,
          jQuery, KnockoutJS, Twitter Bootstrap, Sharepoint
        </p>
      </article>
      <hr />
      <div className="pagebreak" />
      <h2 className="title is-2 print-only">
        Professional experience (continue)
      </h2>
      {/*REPLY*/}
      <article>
        <h4 className="title is-4 is-uppercase">
          Developer and System Administrator ::{" "}
          <small className="has-text-weight-light">
            September 2003 - September 2010
          </small>
        </h4>
        <p className="subtitle is-5 is-uppercase">
          Reply SPA
          {" :: "}
          <small className="has-text-weight-light">Turin, Italy</small>
        </p>
        <p>
          Consultant on different kind of projects, from development to system
          administration, on Linux, Unix and Microsoft environments.
        </p>
        <p className="is-italic">
          .net, WebForms, Javascript, Linux, Unix, BMC ITSM
        </p>
      </article>
      <hr />
      {/*GVS*/}
      <article>
        <h4 className="title is-4 is-uppercase">
          Unix System Administrator ::{" "}
          <small className="has-text-weight-light">July 2002 - July 2003</small>
        </h4>
        <p className="subtitle is-5 is-uppercase">
          Global Value Services
          {" :: "}
          <small className="has-text-weight-light">Turin, Italy</small>
        </p>
        <p>System and application management on some FCA websites.</p>
        <p className="is-italic">HPUX and custom web applications</p>
      </article>
    </>
  )
}
