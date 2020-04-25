import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Editor({ text, setText }) {
  return (
  
      <ReactQuill
        style={{ height: 200, width : '100%', padding: '20px 0 50px 0', margin: 20 }}
        onChange={(value) => setText(value)}
      />
    
  )
}
