import React from 'react'
import PropTypes from 'prop-types'

import Image from '../classes/Image'

const ImageCropper = ({ images, onAddImage }) => {
  return <div>
    ImageCropper
  </div>
}

ImageCropper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.instanceOf(Image)),
  onAddImage: PropTypes.func.isRequired
}

export default ImageCropper
