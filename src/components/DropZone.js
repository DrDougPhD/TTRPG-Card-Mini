import React, {
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import {
  useDropzone
} from 'react-dropzone'

const DropZone = ({ images, onDrag }) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      if (!file.type.startsWith('image/')) {
        console.error(`Unable to accept "${file.name}", it's an unsupported file type: "${file.type}"`)
        return
      }

      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log('Drop loaded')
        console.log(binaryStr)

        // TODO: detect if file is an image
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
      <>{images}</>
    </div>
  )
}

DropZone.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onDrag: PropTypes.func.isRequired
}

export default DropZone
