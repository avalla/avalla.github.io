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
          Developed web applications for manufacturing industry, from analysis to customer deployments and updates.
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
          ,MES solution for SMEs. Helps manufacturing industries to accelerate their production processes, showing
          workers and machine data in realtime. Agile Factory is connected to IIOT devices via OPC-UA or MQTT and
          communicates with customer's ERPs.
        </p>
        <p className="is-italic">
          NodeJs, GraphQL, React, Jest, Cypress, Apollo, Redux, Elastic Search, Mysql, MongoDb, Redis, Github, Docker,
          Mqtt, OPC-UA, S3, Lerna, Kettle, Sonarqube
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
