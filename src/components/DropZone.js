import React, {
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import {
  useDropzone
} from 'react-dropzone'

import Image from '../classes/Image'

const DropZone = ({ children, handleImageDrop }) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      if (!file.type.startsWith('image/')) {
        console.error(`Unable to accept "${file.name}", it's an unsupported file type: "${file.type}"`)
        return
      }
      console.debug(`Accepted "${file.name}" for queuing`)

      const reader = new FileReader()
      reader.onabort = () => console.warn('file reading was aborted')
      reader.onerror = () => console.error('file reading has failed')
      reader.onload = () => {
        handleImageDrop(new Image({
          data: reader.result,
          name: file.name
        }))
        console.debug(`"${file.name}" successfully queued`)
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()}
        accept="image/*"
      />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag n drop some files here, or click to select files</p>
      }
      <>{children}</>
    </div>
  )
}

DropZone.propTypes = {
  children: PropTypes.element,
  handleImageDrop: PropTypes.func.isRequired
}

export default DropZone
