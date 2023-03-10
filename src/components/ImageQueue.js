import React from 'react'
import Stack from 'react-bootstrap/Stack'
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
      <Stack gap={3}>
      {
        images.map((image, i) => (
          <QueuedImage
            key={i}
            image={image}
          />
        ))
      }
      </Stack>
    </DropZone>
  )
}

ImageQueue.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onAddImage: PropTypes.func.isRequired
}

export default ImageQueue
