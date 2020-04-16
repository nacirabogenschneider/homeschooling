import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { firestore } from '../firebase'
import close from '../images/close.svg'

export default function CardDetails({
  setCardDetailsVisible,
  selectedCardbyClick,
}) {
  const [tasks, setTasks] = useState([
    {
      title: 'Die erste Aufgabe',
      description:
        'Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung',
      upload: 'upload',
    },
    {
      title: 'Die zweite Aufgabe',
      description:
        'Eine weitere Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung',
    },
    {
      title: 'Die dritte Aufgabe',
      description:
        'Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung Eine kurze Testbeschreibung',
    },
  ])
  function handleUploadSubmit(event) {
    event.preventDefault()
    console.log('Upaod', event.target.value)
    const cardRef = firestore.doc(`cards/${selectedCardbyClick.id}`)
    cardRef.update({ upload: 'nichts zu lernen' })
    console.log('Selected With Upload OnSubmit', selectedCardbyClick)
  }
  function renderTasks() {
    return tasks.map((task) => (
      <div
        key={tasks.indexOf(task)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            marginTop: 8,
            color: 'white',
            fontSize: '1.2rem',
            height: 60,
            width: 60,
            borderRadius: '50%',
            background: 'orange',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {tasks.indexOf(task) + 1}
        </div>
        <OrangeLine></OrangeLine>
        <div
          style={{
            borderRadius: 12,
            border: '1px solid lightgrey',
            padding: 8,
            marginBottom: 8,
            width: '100%',
            boxShadow: ' 0 0 6px 2px #cfcfcf',
          }}
        >
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <div>{task.upload}</div>

          <input
            type="radio"
            id="notdone"
            name={tasks.indexOf(task)}
            value="notdone"
          ></input>
          <label htmlFor="notdone">zu bearbeiten</label>

          <input
            type="radio"
            id="done"
            name={tasks.indexOf(task)}
            value="done"
          ></input>
          <label htmlFor="done">erledigt</label>
        </div>
      </div>
    ))
  }

  return (
    <DetailSection>
      <Header>
        <ImgClose
          src={close}
          onClick={() => setCardDetailsVisible(false)}
        ></ImgClose>
      </Header>

      <ContentSection>
        <div>
          <h2 style={{ color: 'orange' }}>Basis-Informationen</h2>
          <h2>Titel: {selectedCardbyClick.title}</h2>
          <small>Autor: {selectedCardbyClick.author}</small>
          <p>Beschreibung: {selectedCardbyClick.description}</p>
          <p>Lernlevel :{selectedCardbyClick.level}</p>
        </div>
      </ContentSection>
      <CardDetailSection>
        <h2 style={{ color: 'orange' }}>Detail-Informationen</h2>

        {renderTasks()}
      </CardDetailSection>
      <FormSection>
        <form>
          <h2>Neue Aufgabe erstellen</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Aufgabe</label>
            <input type="text" placeholter="Überschrift"></input>
            <label>Textfeld</label>
            <input type="textarea"></input>
          </div>
          <UploadSection>
            <h2>Deine Uploads</h2>
            <div>{selectedCardbyClick.upload}</div>
            <div>
              <input type="file"></input>
              <button onClick={handleUploadSubmit}>Hochladen</button>
            </div>
          </UploadSection>
          <button type="submit">Speichern</button>
        </form>
      </FormSection>
      <div>hier könnten noch möglichkeiten zum Fragen stellen sein.</div>
      <Footer></Footer>
    </DetailSection>
  )
}
const DetailSection = styled.div`
  position: absolute;
  top: 10px;
  padding: 0;
  left: 10px;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  border-radius: 12px;
  opacity: 0.99;
  background: white;
  z-index: 400;
  box-shadow: 0 0 10px 2px #cfcfcf;
`

const OrangeLine = styled.div`
  margin: 8px 0;
  height: 30px;
  width: 100%;
  background: linear-gradient(
    to right,
    white 0%,
    white 49.9%,
    orange 49.9%,
    orange 50.1%,
    white 50.1%,
    white 100%
  );
`
const ContentSection = styled.section`
  padding: 30px 8px;
  margin: 8px;
  height: 100vh;
`
const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 12px;
  padding: 16px;
  margin: 8px 16px 50px 16px;
  background: #f5f5f5;
`
const CardDetailSection = styled.section`
  padding: 8px;
  margin: 8px 16px 50px 16px;
`

const UploadSection = styled.div`
  border-radius: 12px;
  border: 1px solid lightgrey;
  padding: 8px;
  margin: 10px;
  width: 240px;
`
const Header = styled.header`
  background: linear-gradient(to left, #5e99cf, #5ebd99);
  position: fixed;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  left: 10px;
  right: 10px;
`
const Footer = styled.footer`
  color: white;
  background: linear-gradient(to right, #5e99cf, #5ebd99);
  position: fixed;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 4px;
  height: 30px;
  left: 10px;
  right: 10px;
  bottom: 10px;
`
const ImgClose = styled.img`
  height: 26px;
  padding: 5px;
`

// @media (max-width: 768px) {
//   flex-direction: column;
// }
// `
