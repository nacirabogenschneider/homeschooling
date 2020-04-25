import React, { useState } from 'react'
import { firestore } from '../firebase'
import Upload from './Upload'
import Editor from './Editor'
import styled from 'styled-components/macro'
import ReactHtmlParser from 'react-html-parser'
import uuid from 'react-uuid'

export default function CardDetailForm({ card }) {
  const [tasktitle, setTasksTitle] = useState('')
  const [taskContent, setTaskContent] = useState('')
  const id = card && card.id
  const [text, setText] = useState()

  async function handleSubmit(event) {
    event.preventDefault()
    const cardRef = await firestore.doc(`cards/${id}`)
    const taskObject = { title: tasktitle, task: text, taskId: uuid() }
    card &&
      cardRef.update({
        tasks: [...card.tasks, taskObject],
      })

    setText('')
  }



  return (
    <FormSection>
      <form style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <h2>Neue Aufgabe erstellen</h2>
        <p>Card-Id: {id}</p>
        <h4>Vorschau</h4>
        <p>Titel: {tasktitle}</p>
        <div style={{ paddingBottom: 20 }}>Inhalt: {ReactHtmlParser(text)}</div>
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <label>Titel der Aufgabe</label>
          <input
            type="text"
            placeholter="Überschrift"
            onChange={(event) => setTasksTitle(event.target.value)}
          ></input>
          
          <Editor text={text} setText={setText} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SubmitButton onClick={handleSubmit}>Speichern</SubmitButton>
        </div>
      </form>
    </FormSection>
  )
}

const SubmitButton = styled.button`
  border: 2px solid orange;
  margin: 50px 0 20px 0;
  padding: 8px;
  font-size: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
  background: #f5f5f5;
  @media (max-width: 768px) {
    justify-content: center;
  }
`
