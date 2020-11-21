import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


export const ContentPageTemplate = ({}) => (<div className="ContentPage">Ich bin eine Content Seite</div>)

ContentPageTemplate.PropTypes={
    title: PropTypes.string
}

const ContentPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <ContentPageTemplate
          title={frontmatter.title}
        />
      </Layout>
    )
  }


  ContentPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }

export default ContentPage

export const contentPageQuery = graphql`
  query ContentPage($id: String!) { 
    markdownRemark(id: { eq: $id }) {
      frontmatter {
          title
        }
    }
  }
`