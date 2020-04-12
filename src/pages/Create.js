import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Card from '../components/Card'
import Filter from '../components/Filter'
import arrow from '../images/close.svg'
import uuid from 'react-uuid'
import close from '../images/close.svg'
import bookmark from '../images/bookmark.svg'

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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [createSchoolValue, setCreateSchoolValue] = useState()
  const [createClassValue, setCreateClassValue] = useState()
  const [createSubjectsValue, setCreateSubjectsValue] = useState()
  const [color, setColor] = useState('white')
  const [isBookmarked, setIsBookmarked] = useState(true)
  const [upload, setUpload] = useState([])
  const [schoolrequired, setSchoolRequired] = useState('')
  const [classRequired, setClassRequired] = useState('')
  const [subjectsRequired, setSubjectsRequired] = useState('')

  const sportColor = 'linear-gradient(to right, #1697be, #84d9f3)'
  const mathColor = 'linear-gradient(to right , #a10808, #f34c36 )'
  const germanColor = 'linear-gradient(to right,#073ead, #53aff5)'
  const artColor = 'linear-gradient(to right, #1e9fb3 ,#6a07a3, #a3078e, #f7f42a)'
  const musicColor = 'linear-gradient(to right, #ee7600,#f8ea6d)'
  const religionColor = 'linear-gradient(to right,#360666, #b907eb)'
  const bioColor = 'linear-gradient(to right,darkgreen, #00bf43)'
  const englishColor = 'linear-gradient(to right,#026fb8, #04c96d)'
  const theaterColor = 'linear-gradient(to right,#84d9f3, #1697be)'
  const medienColor=  'linear-gradient(to right,#b9f728, #fc1287)'

  const required = 'required'
  const authorId = uuid()
  useEffect(() => {
    if (createSubjectsValue) {
      const selectedSubject = createSubjectsValue.value
      if (selectedSubject.label === 'Sport') {
        setColor(sportColor)
      } else if (selectedSubject.label === 'Mathematik') {
        setColor(mathColor)
      } else if (selectedSubject.label === 'Musik') {
        setColor(musicColor)
      } else if (selectedSubject.label === 'Deutsch') {
        setColor(germanColor)
      }  else if (selectedSubject.label === 'Kunst') {
        setColor(artColor)
      } else if (selectedSubject.label === 'Theater') {
        setColor(theaterColor)
      } else if (selectedSubject.label === 'Englisch') {
        setColor(englishColor)
      } else if (selectedSubject.label === 'Sachkunde') {
        setColor(bioColor)
      } else if (selectedSubject.label === 'Medien') {
        setColor(medienColor)
      }else setColor(religionColor)
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
  console.log('Cards', cards)
  function handleSubmit(event) {
    event.preventDefault()
    if(createSchoolValue &&  createClassValue  && createSubjectsValue){ setCards([
      ...cards,
      {
        id: uuid(),
        title: title,
        description: description,
        author: author,
        authorId: authorId,
        bookmarked: false,
        upload: upload,
        school: createSchoolValue.value.label,
        classroom: createClassValue.value.label,
        subject: createSubjectsValue.value.label,
        color: color,
      },
    ]) 
  } 
  }

  function handleUpload(event) {
    console.log('Es wird was hochgeladen: ', event.target.files[0])
    setUpload([...upload, { selecteFile: event.target.files[0], loaded: 0 }])
  }

  function onUploadClick() {
    console.log('Button Klicked')
  }

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
                  name="author"
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
            value={createClassValue}
            options={schoolOption}
            title={schoolName}
            setValue={setCreateSchoolValue}
          />
      
          <Filter
            required={required}
            value={createClassValue}
            options={classes}
            title={classesTitle}
            setValue={setCreateClassValue}
          />
          <Filter
            required={required}
            value={createSubjectsValue}
            options={subjects}
            title={subjectsTitle}
            setValue={setCreateSubjectsValue}
          />
          <div>
            <label style={{ margin: '8px 20px' }}>
              <StyledH3> Dateiupload:</StyledH3>
              <StyledInputUpload
                value={upload}
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
          <StyledSubmitButton type="submit" >Speichern</StyledSubmitButton>
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
