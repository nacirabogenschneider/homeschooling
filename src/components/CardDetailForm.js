import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import Upload from './Upload'
import styled from 'styled-components/macro'

export default function CardDetailForm({ cards, selectedId }) {
  const [selectedCardbyClick, setSelectedCardbyClick] = useState({})
  const [tasktitle, setTasksTitle] = useState('')
  const [taskContent, setTaskContent] = useState('')

  useEffect(() => {
    findSelected()
  }, [selectedId])

  async function findSelected() {
    const selectedCard = await cards.find((card) => card.id === selectedId)
    setSelectedCardbyClick(selectedCard)
    console.log('Form', selectedId)
  }

  async function handleSubmit() {
    const cardRef = await firestore.doc(`cards/${selectedCardbyClick.id}`)
    const taskObject = { title: tasktitle, tasks: taskContent }
    cardRef.update({ tasks: taskObject })
  }

  return (
    <FormSection>
      <form>
        <h2>Neue Aufgabe erstellen</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Aufgabe</label>
          <input
            type="text"
            placeholter="Überschrift"
            onChange={(value) => setTasksTitle(value)}
          ></input>
          <label>Textfeld</label>
          <input
            type="textarea"
            onChange={(value) => setTaskContent(value)}
          ></input>
        </div>
        <Upload />
        <button type="submit" onSubmit={handleSubmit}>
          Speichern
        </button>
      </form>
    </FormSection>
  )
}
const FormSection = styled.section`
  display: flex;
  width: 60%;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 12px;
  padding: 16px;
  margin: 8px 16px 50px 16px;
  background: #f5f5f5;
  @media (max-width: 768px) {
    width: 70%;
  }
`
