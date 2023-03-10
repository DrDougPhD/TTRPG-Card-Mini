import React from 'react'
import Stack from 'react-bootstrap/Stack'
import PropTypes from 'prop-types'

import DropZone from './DropZone'
import QueuedImage from './QueuedImage'

import Image from '../classes/Image'

const ImageQueue = ({ images, onAddImage }) => {
  return (
    <DropZone
      className='h-100'
      handleImageDrop={e => onAddImage(e)}
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
  images: PropTypes.arrayOf(PropTypes.instanceOf(Image)),
  onAddImage: PropTypes.func.isRequired
}

export default ImageQueue
