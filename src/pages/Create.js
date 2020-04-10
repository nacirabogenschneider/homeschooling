import React, { useState, useEffect } from 'react'
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
  const [color, setColor] = useState('white')

  const sportColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const mathColor = 'linear-gradient(to right, #d82c2c, #a10808)'
  const germanColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const artColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const musicColor = 'linear-gradient(to right,#f8ea6d, #ee7600)'
  const religionColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const writingColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const readingColor = 'linear-gradient(to right,#84d9f3, #1697be)'

  useEffect(() => {
    if (createSubjectsValue) {
      const selectedSubject = createSubjectsValue.value
      if (selectedSubject.label === 'Sport') {
        setColor(sportColor)
      } else if (selectedSubject.label === 'Mathematik') {
        setColor(mathColor)
      } else if (selectedSubject.label === 'Musik') {
        setColor(musicColor)
      }
    }
  }, [createSubjectsValue])

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value)
  }

  return (
    <CreateSection>
      <h1>Erstelle eine neue Lernkarte</h1>
      <CardPreview>
        <Card
          title={title}
          description={description}
          author={author}
          color={color}
        />
        <StyledForm>
          <H2Wrapper>
            <StyledH2>Basis-Informationen</StyledH2>
            <Img src={arrow} alt="toggle button"></Img>
          </H2Wrapper>

          <StyledLabel>
            <StyledH3>Titel der Lernkarte:</StyledH3>
            <StyledInput
              maxLength="20"
              onChange={handleTitleChange}
              name="title"
              type="text"
              placeholder="Titel eintragen"
            ></StyledInput>
          </StyledLabel>

          <StyledLabel>
            <StyledH3> Kurzbeschreibung:</StyledH3>
            <StyledInput
              maxLength="20"
              type="textarea"
              placeholder="Kurzbeschreibung"
              onChange={handleDescriptionChange}
            ></StyledInput>
          </StyledLabel>

          <StyledLabel>
            <StyledH3>Autor:</StyledH3>
            <StyledInput
              maxLength="20"
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
            <StyledInput
              type="file"
              placeholder="Freitext als einleitende Erleuterung"
            ></StyledInput>
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  margin: 10px;
  border: 2px solid lightgrey;
  padding: 24px;
  border-radius: 12px;
  @media (max-width: 420px) {
    width: 240px;
  }
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
