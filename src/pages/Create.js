import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Card from '../components/Card'
import Filter from '../components/Filter'
import arrow from '../images/close.svg'
import uuid from 'react-uuid'
import { firestore } from '../firebase'

export default function Create({
  subjects,
  subjectsTitle,
  cards,
  levelStyle,
  level,
  setLevel,
  setActive,
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [createSchoolValue, setCreateSchoolValue] = useState()
  const [createClassValue, setCreateClassValue] = useState()
  const [createSubjectsValue, setCreateSubjectsValue] = useState()
  const [color, setColor] = useState('white')
  const isBookmarked = false
  const [upload, setUpload] = useState([])
  const sportColor = 'linear-gradient(to right, #1697be, #84d9f3)'
  const mathColor = 'linear-gradient(to right , #a10808, #f34c36 )'
  const germanColor = 'linear-gradient(to right,#073ead, #53aff5)'
  const artColor =
    'linear-gradient(to right, #1e9fb3 ,#6a07a3, #a3078e, #f7f42a)'
  const musicColor = 'linear-gradient(to right, #ee7600,#f8ea6d)'
  const religionColor = 'linear-gradient(to right,#360666, #b907eb)'
  const bioColor = 'linear-gradient(to right,darkgreen, #00bf43)'
  const englishColor = 'linear-gradient(to right,#026fb8, #04c96d)'
  const theaterColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const medienColor = 'linear-gradient(to right,#b9f728, #fc1287)'
  const required = 'required'
  const authorId = uuid()
  const [cardPreview, setCardPreview]= useState('')

  useEffect(() => {
    setActive('create')
  }, [])
  useEffect(() => {
    if (createSubjectsValue) {
      if (createSubjectsValue === 'Sport') {
        setColor(sportColor)
      } else if (createSubjectsValue === 'Mathematik') {
        setColor(mathColor)
      } else if (createSubjectsValue === 'Musik') {
        setColor(musicColor)
      } else if (createSubjectsValue === 'Deutsch') {
        setColor(germanColor)
      } else if (createSubjectsValue === 'Kunst') {
        setColor(artColor)
      } else if (createSubjectsValue === 'Theater') {
        setColor(theaterColor)
      } else if (createSubjectsValue === 'Englisch') {
        setColor(englishColor)
      } else if (createSubjectsValue === 'Sachkunde') {
        setColor(bioColor)
      } else if (createSubjectsValue === 'Medien') {
        setColor(medienColor)
      } else if (createSubjectsValue === 'Religion') {
        setColor(religionColor)
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

  async function handleSubmit(event) {
    event.preventDefault()
    if (createSubjectsValue) {
      const card = {
        title: title,
        description: description,
        author: author,
        authorId: authorId,
        subject: createSubjectsValue,
        color: color,
        level: level,
        levelStyle: levelStyle,
        isBookmarked: isBookmarked,
        isClicked: false,
        upload: upload,
        tasks: [],
        cardId: uuid(),
        cardPreview: cardPreview  
      }
      await firestore.collection('cards').add(card)
    }
  }
  function onRadioChange(event) {
    setLevel && setLevel(event.target.value)
  }
  function handlePreviewChange(event){
    setCardPreview && setCardPreview(event.target.value)
  }

  return (
    <CreateSection>
      <StyledHeading>Erstelle eine neue Lernkarte</StyledHeading>
      <CardPreview>
        <Card
          levelStyle={levelStyle}
          title={title}
          description={description}
          author={author}
          color={color}
          cards={cards}
          setCardDetailsVisible={''}
          cardPreview={cardPreview}
        />
        <StyledForm onSubmit={handleSubmit}>
          <H2Wrapper>
            <StyledH2>Basis-Informationen</StyledH2>
            <Img src={arrow} alt="toggle button"></Img>
          </H2Wrapper>
          <StyledLabel>
            <StyledH3>Titel der Lernkarte:</StyledH3>
            <StyledInput
              required
              value={title}
              maxLength="20"
              onChange={handleTitleChange}
              name="title"
              type="text"
              placeholder="Titel eintragen"
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <StyledH3>Vorschaubild URL:</StyledH3>
            <StyledInput
              required
              name="preview"
              value={cardPreview}
              maxLength="100"
              type="text"
              placeholder="Vorschaubild URL"
              onChange={handlePreviewChange}
            ></StyledInput> </StyledLabel>
             <StyledLabel>
            <StyledH3> Kurzbeschreibung:</StyledH3>
            <StyledInput
              required
              name="description"
              value={description}
              maxLength="20"
              type="textarea"
              placeholder="Kurzbeschreibung"
              onChange={handleDescriptionChange}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <StyledH3>Autor:</StyledH3>
            <StyledInput
              required
              value={author}
              maxLength="32"
              onChange={handleAuthorChange}
              name="author"
              type="text"
              placeholder="Hier eintragen"
            ></StyledInput>
          </StyledLabel>
         
          <Filter
            required={required}
            options={subjects}
            title={subjectsTitle}
            setValue={setCreateSubjectsValue}
          />

          <StyledFooter> Lern-Level:</StyledFooter>
          <RadioGroup>
            <div style={{ display: 'flex' }}>
              <input
                type="radio"
                id="better"
                name="level"
                value="better"
                onChange={onRadioChange}
              ></input>
              <label htmlFor="better">
                <p style={{ marginLeft: 6 }}>Fortgeschritten</p>
              </label>
            </div>
            <div style={{ display: 'flex' }}>
              <input
                type="radio"
                id="normal"
                name="level"
                value="normal"
                onChange={onRadioChange}
              ></input>
              <label htmlFor="normal">
                <p style={{ marginLeft: 6 }}>Normal</p>
              </label>
            </div>
            <div style={{ display: 'flex' }}>
              <input
                type="radio"
                id="low"
                name="level"
                value="low"
                onChange={onRadioChange}
              ></input>
              <label htmlFor="low">
                <p style={{ marginLeft: 6 }}>Fördern</p>
              </label>
            </div>
          </RadioGroup>
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
  width: 100%;
  @media (max-width: 576px) {
    margin: 0;
    padding: 0;
  }
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
const StyledFooter = styled.h3`
  margin: 20px 0;
  color: orange;
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
const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 12px;
  border: 2px solid lightgrey;
  @media (max-width: 400px) {
    flex-direction: column;
    padding: 6px;
  }
`
