import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from '../components/Card'
import Filter from '../components/Filter'
import arrow from '../images/close.svg'

export default function Create({
  schoolOption,
  schoolName,
  classes,
  classesTitle,
  subjects,
  subjectsTitle,
}) {
  const [title, setTitle] = useState('Titel der Karte')
  const [description, setDescription] = useState('Kurzbeschreibung')
  const [author, setAuthor] = useState('Name des Autors')
  const [createSchoolValue, setCreateSchoolValue] = useState()
  const [createClassValue, setCreateClassValue] = useState()
  const [createSubjectsValue, setCreateSubjectsValue] = useState()
  function handleTitleChange(event) {
    setTitle(event.target.value)
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value)
  }
  console.log('createSchoolValue', createSchoolValue)
  console.log('createClassValue', createClassValue)
  console.log('createSubjectsValue', createSubjectsValue)

  return (
    <CreateSection>
      <h1>Erstelle eine neue Lernkarte</h1>
      <CardPreview>
        <Card title={title} description={description} author={author} />
        <StyledForm>
          <H2Wrapper>
            <StyledH2>Basis-Informationen</StyledH2>
            <Img src={arrow} alt="toggle button"></Img>
          </H2Wrapper>
          <StyledLabel>
            <StyledH3>Titel der Lernkarte:</StyledH3>
            <StyledInput
              onChange={handleTitleChange}
              name="title"
              type="text"
              placeholder="Titel eintragen"
            ></StyledInput>
          </StyledLabel>

          <StyledLabel>
            <StyledH3> Kurzbeschreibung:</StyledH3>
            <StyledInput
              type="textarea"
              placeholder="Kurzbeschreibung"
              onChange={handleDescriptionChange}
            ></StyledInput>
          </StyledLabel>

          <StyledLabel>
            <StyledH3>Autor:</StyledH3>
            <StyledInput
              onChange={handleAuthorChange}
              name="author"
              type="text"
              placeholder="Hier eintragen"
            ></StyledInput>
          </StyledLabel>

          <Filter
            options={schoolOption}
            title={schoolName}
            setValue={setCreateSchoolValue}
          />

          <Filter
            options={classes}
            title={classesTitle}
            setValue={setCreateClassValue}
          />
          <Filter
            options={subjects}
            title={subjectsTitle}
            setValue={setCreateSubjectsValue}
          />
          <label style={{ margin: '8px 20px' }}>
            <p> Dateiupload:</p>
            <input
              type="file"
              placeholder="Freitext als einleitende Erleuterung"
            ></input>
          </label>
        </StyledForm>
      </CardPreview>
    </CreateSection>
  )
}

const CreateSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const CardPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const StyledForm = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  margin: 10px;
  border: 2px solid lightgrey;
  padding: 24px;
  border-radius: 12px;
`
const StyledLabel = styled.label`
  margin: 20px 20px;
`
const H2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledH2 = styled.h3`
  color: orange;
  margin: 0 0 10px 0;
`
const StyledH3 = styled.h3`
  margin: 0 0 10px 0;
`
const StyledInput = styled.input`
  box-sizing: border-box;
  width: 200px;
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid lightgrey;
  background: white;
`
const Img = styled.img`
  height: 20px;
`
