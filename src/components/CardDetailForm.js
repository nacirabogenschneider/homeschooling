import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import Upload from './Upload'
import styled from 'styled-components/macro'
import { database } from 'firebase'

export default function CardDetailForm({ card }) {
  const [selectedCardbyClick, setSelectedCardbyClick] = useState({})
  const [tasktitle, setTasksTitle] = useState('')
  const [taskContent, setTaskContent] = useState('')

  const id = card && card.id

  async function handleSubmit(event) {
    event.preventDefault()
    const cardRef = await firestore.doc(`cards/${id}`)

    const taskObject = { title: tasktitle, task: taskContent }
    card &&
      cardRef.update({
        tasks: [...card.tasks, taskObject],
      })
  }

  return (
    <FormSection>
      <form>
        <p>Card-Id: {id}</p>
        <p>{tasktitle}</p>
        <p>{taskContent}</p>
        <h2>Neue Aufgabe erstellen</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Aufgabe</label>
          <input
            type="text"
            placeholter="Überschrift"
            onChange={(event) => setTasksTitle(event.target.value)}
          ></input>
          <label>Textfeld</label>
          <input
            type="textarea"
            onChange={(event) => setTaskContent(event.target.value)}
          ></input>
        </div>
        <Upload />
        <button onClick={handleSubmit}>Speichern</button>
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
