import React from 'react'
import PropTypes from 'prop-types'

import '../styles/QueuedImage.css'

const QueuedImage = ({ image }) => {
  return (
    <img alt=''
      src={ image }>
    </img>
  )
}

QueuedImage.propTypes = {
  image: PropTypes.string
}

export default QueuedImage
