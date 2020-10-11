// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = ({className = '', style, size, ...props}) => {
  return (
    <div
      className={`box ${size ? `box--${size}` : ''} ${className}`.trim()}
      style={{...style, fontStyle: 'italic'}}
      {...props}
    />
  )
}

const smallBox = (
  <Box
    id="testProp"
    className="testClass"
    size="small"
    style={{backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </Box>
)

const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)

const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
