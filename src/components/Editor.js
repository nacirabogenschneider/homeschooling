import React from 'react'
import ReactQuill, {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Editor({ text, setText }) {

 const modules = {

    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ['link', 'image', 'video'],
    ]
  };

 const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
  ];

  return (
  
      <ReactQuill
        style={{ height: 400, width : '100%', padding: '20px 0 50px 0' }}
        onChange={(value) => setText(value)}
        theme="snow"
        modules={modules}
        formats={formats}
      />
    
  )
}
