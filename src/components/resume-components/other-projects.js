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
          This project is used to test the effectiveness of a psychological
          test. It was developed with Gatsby, React, Redux, FaunaDb and deployed
          on Netlify (web and functions).
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
          This project is a browser for IPs for movies, serials, comics and
          books. It was developed with Gatsby, React, Redux, Algolia, Wordpress
          and deployed on Netlify (only web). Users manage contents with
          Wordpress panel (every content type is related to a custom post type
          or taxonomy).
        </p>
      </article>
    </>
  )
}
