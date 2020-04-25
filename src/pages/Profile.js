import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import * as hamburg from '../data/hamburg.json'
import Editor from '../components/Editor'
import ReactHtmlParser from 'react-html-parser'
import edit from '../images/edit.svg'

export default function Profile({cards, schoolOption, setSchoolOption}) {

 const user={
    userId: 1,
    name: 'Nacira',
    lastName: 'Bogenschneider',
    email: 'mail@nacira.de',
    userGroup: 'teacher',
    school: 'Musterschule, Musterort',
    schoolId: 1234,
    phone: '',
    description: '',
    subjects:['Mathematik', 'Deutsch', 'Musik'],
    classes: ['2a', 'VSKb', '4c']
  }

  const classes = [
    { value: 'Vorschule', label: 'Vorschule' },
    { value: 'Klasse 1', label: 'Klasse 1' },
    { value: 'Klasse 2', label: 'Klasse 2' },
    { value: 'Klasse 3', label: 'Klasse 3' },
    { value: 'Klasse 4', label: 'Klasse 4' },
  ]

  const subjects = [
    { value: 'Mathematik', label: 'Mathematik' },
    { value: 'Deutsch', label: 'Deutsch' },
    { value: 'Englisch', label: 'Englisch' },
    { value: 'Medien', label: 'Medien' },
    { value: 'Sport', label: 'Sport' },
    { value: 'Musik', label: 'Musik' },
    { value: 'Kunst', label: 'Kunst' },
    { value: 'Sachkunde', label: 'Sachkunde' },
    { value: 'Religion', label: 'Religion' },
    { value: 'Theater', label: 'Theater' },
  ]
const hamburgSchool = hamburg.hamburg

const [filteredCards, setFilteredCards] = useState(cards)
const [visibility, setVisibility] = useState(false)
const [classesValue, setClassesValue] = useState()
const [subjectsValue, setSubjectsValue] = useState()
const [schoolValue, setSchoolValue] = useState()
const [profileText, setProfileText] = useState('')
useEffect(() => {
  setSchoolOption(
    hamburgSchool.map((school) => ({
      value: school.name,
      label: school.name,
    }))
  )
}, [hamburgSchool])

async function filterCards() {
  let cardsToFilter
  schoolValue || classesValue || subjectsValue
    ? (cardsToFilter = filteredCards)
    : (cardsToFilter = cards)

  const filterCardsBySchool = await cardsToFilter.filter(
    (card) => card.school === schoolValue
  )
  setFilteredCards(filterCardsBySchool)
}

async function classFilter() {
  let cardsToFilter
  schoolValue || classesValue || subjectsValue
    ? (cardsToFilter = filteredCards)
    : (cardsToFilter = cards)
  const filterCardsByClass = await cardsToFilter.filter(
    (card) => card.classroom === classesValue
  )
  setFilteredCards(filterCardsByClass)
}
async function subjecsFilter() {
  let cardsToFilter
  schoolValue || classesValue || subjectsValue
    ? (cardsToFilter = filteredCards)
    : (cardsToFilter = cards)
  const filterCardsBySubject = await cardsToFilter.filter(
    (card) => card.subject === subjectsValue
  )
  setFilteredCards(filterCardsBySubject)
}

useEffect(() => {
  filterCards()
}, [schoolValue])

useEffect(() => {
  subjecsFilter()
}, [subjectsValue])

useEffect(() => {
  classFilter()
}, [classesValue])

function toggle(){
  setVisibility(!visibility)
}

  return <SectionWrapper >
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
        <ImageWrapper></ImageWrapper>
           <p>Max Mustermann </p>
          </div>
        <ProfileDataWrapper>
            <StyledRow><p>Schule: {user.school}</p></StyledRow>
<StyledRow><p>Fächer:{user.subjects.map(subject=> <Span key={subject}>{subject}</Span>)}</p> </StyledRow>
            <StyledRow><p>Klassen: {user.classes.map(room => <Classes key={room}>{room}</Classes>)}</p></StyledRow>
            <StyledRow><p>Email: mail@mustermann.de</p></StyledRow>
            <StyledRow><p>Telefon: 0172 / 528 70 69</p></StyledRow>
        </ProfileDataWrapper>
        <ProfileContentWrapper>

       <div style={{display: 'flex', alignItems: 'center'}}>
         <span>Zusätzliche Informationen</span>
         <Edit src={edit} onClick={toggle} style={{visibility: `${visibility? 'hidden': ''}`}}></Edit>
      </div> 
          {ReactHtmlParser(profileText)}
        </ProfileContentWrapper>
        <div style={{width: '100%', display: `${visibility? 'flex': 'none'}`, margin: '0 20px 0 0'}}>
        <Editor text={profileText} setText={setProfileText}/>  
        
        </div>
        <StyledButton style={{ display: `${visibility? 'flex': 'none'}`}} onClick={()=>setVisibility(false)}>Speichern</StyledButton>
 </SectionWrapper>
}


const StyledButton = styled.button`
font-size: 1.1rem;
display: flex;
justify-content: center:
align-items: center;
border: none:
width: 200px; 
margin: 40px;
background: white;
padding: 12px;
border: 1px solid grey;
border-radius: 12px;
box-shadow: inset 0 0 10px 3px darkgrey;
`
const Edit = styled.img` 
margin: 0 10px;
height: 20px;
width: 20px;
`
const StyledRow = styled.div`
display: flex,
flexWrap: wrap;
margin: 20px 0;
`
const SectionWrapper = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;

flex-wrap: wrap;  
`
const ImageWrapper = styled.div`
height: 200px;
width: 200px;
margin: 20px; 
border-radius: 50%;
box-shadow: 0 0 10px 3px #ededed;
`
const ProfileDataWrapper= styled.div`

border-radius: 12px;
height: auto;  
width: auto; 
margin: 20px;
padding: 20px;
`
const ProfileContentWrapper= styled.div`

border-radius: 12px;
height: auto;  
width: 100%; 
margin: 20px;
padding: 20px;
`
const Span = styled.span`
font-size: 0.8rem;
padding: 8px; 
margin: 10px;
border: 1px solid orange;
border-radius: 8px;
`
const Classes = styled.span`
font-size: 0.8rem;
padding: 8px; 
margin: 10px;
border: 1px solid green;
border-radius: 16px;
`
