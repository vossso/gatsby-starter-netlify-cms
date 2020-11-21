import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/product-page'

const ContentPagePreview = ({ entry, getAsset }) => {

  return (
    <ContentPageTemplate
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContentPagePreview
