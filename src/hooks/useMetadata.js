import { graphql, useStaticQuery } from 'gatsby';

function useMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            sources
            contacts {
              phone
              email
              website
            }
            social {
              github
              linkedin
              stackoverflow
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
}

export default useMetadata;
