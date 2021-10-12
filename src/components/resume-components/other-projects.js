import React from "react"

export default function OtherProjects() {
  return (
    <>
      <h2 className="title is-2">Other projects</h2>
      <article>
        <h3 className="title is-3">
          <a
            href="https://malingering.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            Malingering
          </a>
          {" :: "}
          <small className="has-text-weight-light">2020</small>
        </h3>
        <p>
          Used to test the effectiveness of psychological tests. It was developed with Gatsby, React, Redux, FaunaDb and
          deployed on Netlify, using web and functions.
        </p>
        <hr />
        <h3 className="title is-3">
          <a
            href="https://spherecontents.com/"
            rel="noreferrer"
            target="_blank"
          >
            Sphere Contents
          </a>
          {" :: "}
          <small className="has-text-weight-light">2020</small>
        </h3>
        <p>
          IPs Browser for movies, serials, books and comics. Developed with Gatsby, React, Redux, Algolia,
          and Wordpress, deployed on Netlify (only web). Content managers configure contents on Wordpress panel.
        </p>
      </article>
    </>
  )
}
