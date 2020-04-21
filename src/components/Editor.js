import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Editor({ text, setText }) {
  return (
    <div>
      <ReactQuill
        style={{ height: 200, padding: '20px 0 50px 0' }}
        onChange={(value) => setText(value)}
      />
    </div>
  )
}
