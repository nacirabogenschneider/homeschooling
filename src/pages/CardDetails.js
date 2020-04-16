import React, { useEffect } from 'react'
import styled from 'styled-components/macro'

export default function CardDetails({
  setCardDetailsVisible,
  selectedCardbyClick,
}) {
  return (
    <DetailSection>
      <div onClick={() => setCardDetailsVisible(false)}>x</div>
      <h1>Basis-Informationen</h1>
      <h2>Titel: {selectedCardbyClick.title}</h2>
      <small>Autor: {selectedCardbyClick.author}</small>
      <p>Beschreibung: {selectedCardbyClick.description}</p>
      <p>Lernlevel :{selectedCardbyClick.level}</p>
      <form style={{ display: 'flex', flexDirection: 'column', width: 400 }}>
        <h1>Detail-Informationen</h1>
        <label>Aufgabe</label>
        <input type="text" placeholter="Überschrift"></input>
        <label>Textfeld</label>
        <input type="textarea"></input>
      </form>
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
