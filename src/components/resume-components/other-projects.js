import React from 'react';

export default function OtherProjects() {
  return (
    <section className='section'>
      <h2 className='title is-2'>Other projects</h2>
      <article>
        <h3 className='title is-3'>
          <a
            href='https://malingering.netlify.app'
            rel='noreferrer'
            target='_blank'
          >
            Malingering
          </a>
          {' :: '}
          <small className='has-text-weight-light'>2020</small>
        </h3>
        <p>
          Developed a Gatsby-based web application for analyzing the effectiveness of psychological tests. Utilized
          technologies such as React, Redux, FaunaDB, and deployed on Netlify. Leveraged serverless functions for
          backend functionality.
        </p>
        <hr />
        <h3 className='title is-3'>
          <a
            href='https://spherecontents.com/'
            rel='noreferrer'
            target='_blank'
          >
            Sphere Contents
          </a>
          {' :: '}
          <small className='has-text-weight-light'>2020</small>
        </h3>
        <p>
          Developed an IPs Browser web application for movies, serials, books, and comics. Leveraged Gatsby, React,
          Redux, Algolia, and Wordpress to create a dynamic and interactive user experience. Deployed on Netlify for web
          access. Utilized a user-friendly Wordpress panel for content managers to configure and update the
          application's contents.
        </p>
        <hr />
        <h3 className='title is-3'>
          Recalibra
          {' :: '}
          <small className='has-text-weight-light'>2025</small>
        </h3>
        <p>
          Developing a mobile application for vagus nerve stimulation therapy. Built with React Native to deliver
          a cross-platform experience for iOS and Android. Currently in development.
        </p>
      </article>
    </section>
  );
}
