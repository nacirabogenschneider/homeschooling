import React from 'react'
import styled from 'styled-components/macro'

export default function CardDetails({ setCardDetailsVisible }) {
  return (
    <DetailSection>
      <div onClick={() => setCardDetailsVisible(false)}>x</div>
      <h1>Detail Informationen deiner Karte</h1>
    </DetailSection>
  )
}
const DetailSection = styled.div`
  position: absolute;
  top: 110px;
  padding: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  overflow-x: scroll;
  border-radius: 12px;
  opacity: 0.98;
  background: white;
  z-index: 400;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
