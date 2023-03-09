import React from 'react'

import './App.css'
import PageHeader from './components/PageHeader'
import ImageQueue from './components/ImageQueue'
import ImageCropper from './components/ImageCropper'
import SettingsPanel from './components/SettingsPanel'

const App = () => (
  <>
    <PageHeader></PageHeader>
    <ImageQueue></ImageQueue>
    <ImageCropper></ImageCropper>
    <SettingsPanel></SettingsPanel>
  </>
)

export default App
