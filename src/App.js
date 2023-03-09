import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css'
import PageHeader from './components/PageHeader'
import ImageQueue from './components/ImageQueue'
import ImageCropper from './components/ImageCropper'
import SettingsPanel from './components/SettingsPanel'

const App = () => (
  <Container fluid >
    <Row>
      <Col>
        <PageHeader></PageHeader>
      </Col>
    </Row>
    <Row>
      <Col>
        <ImageQueue></ImageQueue>
      </Col>
      <Col xs={8}>
        <ImageCropper></ImageCropper>
      </Col>
      <Col>
        <SettingsPanel></SettingsPanel>
      </Col>
    </Row>
  </Container>
)

export default App
