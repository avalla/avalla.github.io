import React from "react"

export default function ProfessionalExperience() {
  return (
    <section className="section">
      <h2 className="title is-2">Professional experience</h2>
      {/*IDT*/}
      <article>
        <h4 className="title is-4 is-uppercase">
          Full stack developer and system administrator :: {" "}
          <small className="has-text-weight-light">Feb 2022 - Today</small>
        </h4>
        <p className="subtitle is-5 is-uppercase">
          <a href="https://www.brandsdistribution.com">BrandsDistribution.com</a>
          {" :: "}
          <small className="has-text-weight-light">Turin, Italy</small>
        </p>
        <p>
          Created integrations between BDroppy (a dropshipping application) and external ecommerce platforms (e.g. shopify, squarespace, wix, ekm).
          Applications published on Shopify AppStore, Wix AppStore.<br />
          Created BI platform to analyze costs and ROI, using BigQuery, AirByte, CubeJs, DataStudio
        </p>
        <p className="is-italic">
          Typescript, NodeJs, React, Jest, Redux, Moleculer, Redis, MongoDb, BigQuery, CubeJs, Shopify, Sonarqube
        </p>
      </article>
      {/*AGILE FACTORY*/}
      <article>
        <h4 className="title is-4 is-uppercase">
          CTO and co-founder ::{" "}
          <small className="has-text-weight-light">March 2018 - Jan 2022</small>
        </h4>
        <p className="subtitle is-5 is-uppercase">
          <a href="https://www.agilefactory.it">Agile Factory</a>
          {" - "}
          <small className="has-text-weight-light">Turin, Italy</small>
        </p>
        <p>
          Created a MES solution for SMEs. It helps manufacturing industries to accelerate their production processes, showing data in realtime. Connected to IIOT devices via OPC-UA or MQTT and communicates with customer's ERPs via ETL. Two different web applications, one backend, communication was made with GraphQL.
        </p>
        <p className="is-italic">
          NodeJs, GraphQL, React, Jest, Cypress, Apollo, Redux, MongoDb, Redis, Github, Docker, Mqtt, Moleculer, OPC-UA, S3, Lerna, Kettle, Sonarqube
        </p>
      </article>
      {/*INDUSTRIAL CLOUD*/}
      <article>
        <h4 className="title is-4 is-uppercase">
          Full stack developer ::{" "}
          <small className="has-text-weight-light">June 2015 - March 2018</small>
        </h4>
        <p className="subtitle is-5 is-uppercase">
          <a href="https://www.industrial-cloud.com">Industrial Cloud</a>
          {" - "}
          Politecnico di Torino Spinoff Company
          {" :: "}
          <small className="has-text-weight-light">Turin, Italy</small>
        </p>
        <p>
          Created web applications for manufacturing industry, from analysis to customer deployments and updates.
        </p>
        <p className="is-italic">
          NodeJs, React, Elastic Search, Mysql, Php
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
          Created web applications, ETL and reports on Microsoft environment.
        </p>
        <p className="is-italic">
          .net, Javascript, EF, Dapper, SqlServer, SSRS, SSIS, ASPMVC, WebForms,
          jQuery, KnockoutJS, Twitter Bootstrap, Sharepoint
        </p>
      </article>
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
          Consultant on different kind of projects, from development to system administration, on Linux, Unix and Microsoft environments.
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
    </section>
  )
}
