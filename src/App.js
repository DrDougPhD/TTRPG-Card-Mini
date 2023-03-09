import React, {
  useState
} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css'
import PageHeader from './components/PageHeader'
import ImageQueue from './components/ImageQueue'
import ImageCropper from './components/ImageCropper'
import SettingsPanel from './components/SettingsPanel'

export default function App () {
  const [images, setImages] = useState([])
  const addImage = ({ image }) => setImages([...images, image])

  return (
    <Container fluid className='vh-100 d-flex flex-column'>
      <Row>
        <Col>
          <PageHeader></PageHeader>
        </Col>
      </Row>
      <Row className='h-100'>
        <Col>
          <ImageQueue
            images={images}
            onAddImage={addImage}
          />
        </Col>
        <Col xs={8}>
          <ImageCropper
            images={images}
            onAddImage={addImage}
          />
        </Col>
        <Col>
          <SettingsPanel></SettingsPanel>
        </Col>
      </Row>
    </Container>
  )
}
