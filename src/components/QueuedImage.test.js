import React from 'react'
import {
  createRoot
} from 'react-dom/client'
import {
  act
} from '@testing-library/react'
import $ from 'jquery'

import QueuedImage from './QueuedImage'
import Image from '../classes/Image'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  document.body.removeChild(container)
  container = null
});

it('creates an image element', () => {
  const imageDataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII='
  const expectedFilename = '1x1.png'
  const image = new Image({
    data: imageDataUri,
    name: expectedFilename
  })

  act(() => createRoot(container).render(
      <QueuedImage
        image={image}
        key={0}
      />
  ))

  const $img = $(container).find('img')
  
  expect(container.querySelector('img')).toBeInTheDocument()
  expect($img.attr('alt')).toBe(expectedFilename)
  expect($img.attr('src')).toBe(imageDataUri)


  // act(() => {
  //   render(<QueuedImage name='Jenny' />, container)
  // })
  // expect(container.textContent).toBe('Hello, Jenny!')

  // act(() => {
  //   render(<QueuedImage name='Margaret' />, container)
  // })
  // expect(container.textContent).toBe('Hello, Margaret!')
})
