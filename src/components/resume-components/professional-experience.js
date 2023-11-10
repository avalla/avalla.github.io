import React from 'react';

export default function ProfessionalExperience() {
  return (
    <section className='section'>
      <h2 className='title is-2'>Professional experience</h2>
      {/*IDT*/}
      <article>
        <h4 className='title is-4 is-uppercase'>
          Full stack developer and system administrator :: {' '}
          <small className='has-text-weight-light'>Feb 2022 - Today</small>
        </h4>
        <p className='subtitle is-5 is-uppercase'>
          <a href='https://www.brandsdistribution.com'>BrandsDistribution.com</a>
          {' :: '}
          <small className='has-text-weight-light'>Turin, Italy</small>
        </p>
        <p>
          Engineered integrations between BDroppy, a dropshipping application, and various external ecommerce
          platforms, including Shopify, Squarespace, Wix, and EKM, using a queue system that supports over 50,000
          external stores.

          Developed two different applications that were successfully published on the Shopify AppStore and Wix
          AppStore, expanding the business's reach.

          Pioneered the development of a BI platform, utilizing technologies such as BigQuery, Airbyte, Cube.js, and
          DataStudio. This platform empowered businesses to analyze costs and ROI, enabling data-informed
          decision-making and strategic growth.

          Designed the software architecture for a React Native mobile application.

          Migrated CI/CD from Jenkins to GitHub Actions
        </p>
        <p className='is-italic'>
          Typescript, NodeJs, React, React Native, Jest, Redux, Moleculer, Redis, MongoDb, BigQuery, CubeJs, Shopify,
          Sonarqube
        </p>
      </article>
      {/*AGILE FACTORY*/}
      <article>
        <h4 className='title is-4 is-uppercase'>
          CTO and co-founder ::{' '}
          <small className='has-text-weight-light'>March 2018 - Jan 2022</small>
        </h4>
        <p className='subtitle is-5 is-uppercase'>
          <a href='https://www.agilefactory.it'>Agile Factory</a>
          {' - '}
          <small className='has-text-weight-light'>Turin, Italy</small>
        </p>
        <p>
          Designed and developed a real-time MES solution for SMEs, for management and monitoring of manufacturing
          processes. Integrated with IIoT
          devices via OPC-UA or MQTT and customers' ERPs via ETL. Developed two web applications with GraphQL for efficient
          communication between front-end and back-end components. The team was made up of four people; I designed the
          software architecture and worked as the project maintainer, conducting code reviews for other team members.
          Tasks and milestones were managed on GitHub Issues.
        </p>
        <p className='is-italic'>
          NodeJs, GraphQL, React, Jest, Cypress, Apollo, Redux, MongoDb, Redis, GitHub, Docker, Mqtt, Moleculer, OPC-UA,
          S3, Lerna, Kettle, Sonarqube
        </p>
      </article>
      {/*INDUSTRIAL CLOUD*/}
      <article>
        <h4 className='title is-4 is-uppercase'>
          Full stack developer ::{' '}
          <small className='has-text-weight-light'>June 2015 - March 2018</small>
        </h4>
        <p className='subtitle is-5 is-uppercase'>
          <a href='https://www.industrial-cloud.com'>Industrial Cloud</a>
          {' - '}
          Politecnico di Torino Spin off Company
          {' :: '}
          <small className='has-text-weight-light'>Turin, Italy</small>
        </p>
        <p>
          Created web applications for manufacturing industry, from analysis to customer deployments and updates.
        </p>
        <p className='is-italic'>
          NodeJs, React, Elastic Search, Mysql, Php
        </p>
      </article>
      <hr />
      {/*INTESA SANPAOLO*/}
      <article>
        <h4 className='title is-4 is-uppercase'>
          Full stack developer ::{' '}
          <small className='has-text-weight-light'>
            September 2010 - June 2015
          </small>
        </h4>
        <p className='subtitle is-5 is-uppercase'>
          Intesa SanPaolo
          {' :: '}
          <small className='has-text-weight-light'>
            Moncalieri (Turin), Italy
          </small>
        </p>
        <p>
          Created web applications, ETL and reports on Microsoft environment.
        </p>
        <p className='is-italic'>
          .net, Javascript, EF, Dapper, SqlServer, SSRS, SSIS, ASPMVC, WebForms,
          jQuery, KnockoutJS, Twitter Bootstrap, Sharepoint
        </p>
      </article>
      {/*REPLY*/}
      <article>
        <h4 className='title is-4 is-uppercase'>
          Developer and System Administrator ::{' '}
          <small className='has-text-weight-light'>
            September 2003 - September 2010
          </small>
        </h4>
        <p className='subtitle is-5 is-uppercase'>
          Reply SPA
          {' :: '}
          <small className='has-text-weight-light'>Turin, Italy</small>
        </p>
        <p>
          Consultant on different kind of projects, from development to system administration, on Linux, Unix and
          Microsoft environments.
        </p>
        <p className='is-italic'>
          .net, WebForms, Javascript, Linux, Unix, BMC ITSM
        </p>
      </article>
      <hr />
      {/*GVS*/}
      <article>
        <h4 className='title is-4 is-uppercase'>
          Unix System Administrator ::{' '}
          <small className='has-text-weight-light'>July 2002 - July 2003</small>
        </h4>
        <p className='subtitle is-5 is-uppercase'>
          Global Value Services
          {' :: '}
          <small className='has-text-weight-light'>Turin, Italy</small>
        </p>
        <p>System and application management on some FCA websites.</p>
        <p className='is-italic'>HPUX and custom web applications</p>
      </article>
    </section>
  );
}
