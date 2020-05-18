import React from 'react'
import Img from 'gatsby-image'
import "./index.scss"
import Layout from '../components/layout/layout'

export default function Index({data}) {
    return (
        <Layout>
            <div className="wrapper">Index</div>
            <Img fixed={data.file.childImageSharp.fixed} />
        </Layout>
    )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "landscape.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`