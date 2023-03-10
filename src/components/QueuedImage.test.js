import React from 'react'
import {
  render,
  unmountComponentAtNode
} from 'react-dom'
import {
  act
} from 'react-dom/test-utils'
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
  unmountComponentAtNode(container)
  container.remove()
  container = null
});

it('renders with or without a name', () => {
  const imageDataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII='
  const expectedFilename = '1x1.png'
  const image = new Image({
    data: imageDataUri,
    name: expectedFilename
  })
  
  act(() => {
    render(
      <QueuedImage
        image={image}
        key={0}
      />,
      container
    )
  })

  const $img = $(container).find('img')
  
  expect($img.attr('alt')).toBe(expectedFilename)
  // act(() => {
  //   render(<QueuedImage name='Jenny' />, container)
  // })
  // expect(container.textContent).toBe('Hello, Jenny!')

  // act(() => {
  //   render(<QueuedImage name='Margaret' />, container)
  // })
  // expect(container.textContent).toBe('Hello, Margaret!')
})
