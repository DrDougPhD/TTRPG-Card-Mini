import React from 'react'

import './App.css'
import ImageQueue from './components/ImageQueue'
import ImageCropper from './components/ImageCropper'
import SettingsPanel from './components/SettingsPanel'

const App = () => (
  <div>
    <header>
    </header>
    <ImageQueue></ImageQueue>
    <ImageCropper></ImageCropper>
    <SettingsPanel></SettingsPanel>
  </div>
)

export default App
