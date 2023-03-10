import React from 'react'
import PropTypes from 'prop-types'

import DropZone from './DropZone'
import QueuedImage from './QueuedImage'

const ImageQueue = ({ images, onAddImage }) => {
  const handleDrop = ({ image }) => onAddImage({ image })

  return (
    <DropZone
      className='h-100'
      handleImageDrop={e => handleDrop(e)}
    >
      {
        images.map((image, i) => (
          <QueuedImage
            key={i}
            image={image}
          />
        ))
      }
    </DropZone>
  )
}

ImageQueue.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onAddImage: PropTypes.func.isRequired
}

export default ImageQueue
