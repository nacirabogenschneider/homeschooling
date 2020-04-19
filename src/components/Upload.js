import React from 'react'

import styled from 'styled-components/macro'
export default function Uplaod() {
  return (
    <UploadSection>
      <h2>Deine Uploads</h2>
      <div></div>
      <div>
        <input type="file"></input>
        <button>Hochladen</button>
      </div>
    </UploadSection>
  )
}

const UploadSection = styled.div`
  border-radius: 12px;
  border: 1px solid lightgrey;
  padding: 8px;
  margin: 10px;
  width: 240px;
`
