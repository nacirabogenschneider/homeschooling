import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Card from '../components/Card'
import Filter from '../components/Filter'
import arrow from '../images/close.svg'
import axios from 'axios'

export default function Create({
  schoolOption,
  schoolName,
  classes,
  classesTitle,
  subjects,
  subjectsTitle,
  cards,
  setCards,
}) {
  const [title, setTitle] = useState('Titel der Karte')
  const [description, setDescription] = useState('Kurzbeschreibung')
  const [author, setAuthor] = useState('Name des Autors')
  const [createSchoolValue, setCreateSchoolValue] = useState()
  const [createClassValue, setCreateClassValue] = useState()
  const [createSubjectsValue, setCreateSubjectsValue] = useState()
  const [color, setColor] = useState('white')
  const [isBookmarked, setIsBookmarked] = useState(true)
  const [upload, setUpload] = useState([])

  const sportColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const mathColor = 'linear-gradient(to right, #a10808 , #f34c36 )'
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

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleUpload(event) {
    console.log('Es wird was hochgeladen: ', event.target.files[0])
    setUpload([...upload, { selecteFile: event.target.files[0], loaded: 0 }])
  }

  function onUploadClick() {
    const data = new FormData()
    data.append('file', upload)
  }

  console.log('Upload with loaded', upload)
  return (
    <CreateSection>
      <StyledHeading>Erstelle eine neue Lernkarte</StyledHeading>
      <CardPreview>
        <Card
          title={title}
          description={description}
          author={author}
          color={color}
          isBookmarked={isBookmarked}
          setIsBookmarked={setIsBookmarked}
        />
        <StyledForm onSubmit={handleSubmit}>
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
              maxLength="32"
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
          <div>
            <label style={{ margin: '8px 20px' }}>
              <StyledH3> Dateiupload:</StyledH3>
              <StyledInputUpload
                type="file"
                name="file"
                onChange={handleUpload}
                placeholder="Freitext als einleitende Erleuterung"
              ></StyledInputUpload>
            </label>
            <button type="button" onClick={onUploadClick}>
              Upload
            </button>
          </div>
          <StyledSubmitButton type="submit">Speichern</StyledSubmitButton>
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
const StyledHeading = styled.h1`
  margin: 40px;
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
  margin: 10px 10px 60px 10px;
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
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 10px 2px orange;
  }
`
const StyledInputUpload = styled.input`
  box-sizing: border-box;
  width: 200px;
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid lightgrey;
  background: white;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 10px 2px orange;
  }
`
const Img = styled.img`
  height: 20px;
`
const StyledSubmitButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 1rem;
  margin: 40px 20px;
  border-radius: 12px;
  border: 2px solid lightgrey;

  box-shadow: 0 0 10px 2px #cfcfcf;
  &:hover {
    box-shadow: 0 0 10px 2px orange;
  }
  &:focus {
    box-shadow: 0 0 10px 2px orange;
  }
`
