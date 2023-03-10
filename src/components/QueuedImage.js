/**
 * Queued images have the following properties.
 *  * Delete button to remove from the queue
 *  * Number of copies to render in the final printout
 *  * An optional name field to add text to the top of the image
 */
import React from 'react'
import PropTypes from 'prop-types'

import '../styles/QueuedImage.css'

import Image from '../classes/Image'

const QueuedImage = ({ image }) => {
  return (
    <img alt={ image.name }
      src={ image.data }>
    </img>
  )
}

QueuedImage.propTypes = {
  image: PropTypes.instanceOf(Image)
}

export default QueuedImage
