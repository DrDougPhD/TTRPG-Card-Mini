import React from 'react'
import PropTypes from 'prop-types'

const ImageCropper = ({ images, onAddImage }) => {
  return <div>
    ImageCropper
  </div>
}

ImageCropper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onAddImage: PropTypes.func.isRequired
}

export default ImageCropper
