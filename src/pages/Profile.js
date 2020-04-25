import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Filter from '../components/Filter'
import * as hamburg from '../data/hamburg.json'
import refresh from '../images/refresh.svg'


export default function Profile({cards, schoolOption, setSchoolOption}) {

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
const schoolName = 'Schulauswahl'
const classesTitle = 'Jahrgangsfilter'
const subjectsTitle = 'Fächerauswahl'
const [filteredCards, setFilteredCards] = useState(cards)

const [classesValue, setClassesValue] = useState()
const [subjectsValue, setSubjectsValue] = useState()
const [schoolValue, setSchoolValue] = useState()

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

  return <div>
    
    <SelectFilter>
                <Filter
                  required={false}
                  options={schoolOption}
                  title={schoolName}
                  setValue={setSchoolValue}
                />
                <Filter
                  required={false}
                  options={classes}
                  title={classesTitle}
                  setValue={setClassesValue}
                />
                <Filter
                  required={false}
                  options={subjects}
                  title={subjectsTitle}
                  setValue={setSubjectsValue}
                />
                <div style={{ margin: '22px 20px' }}>
                  <H3>Filter zuücksetzen</H3>
                  <RefreshButton onClick={() => window.location.reload(false)}>
                    <RefreshImg src={refresh}></RefreshImg>
                  </RefreshButton>
                </div>
              </SelectFilter>

  </div>
}
const SelectFilter = styled.section`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  margin: 8px 20px;
`
const RefreshButton = styled.button`
  border-radius: 12px;
  border: 1px solid lightgrey;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
const RefreshImg = styled.img`
  height: 20px;
  margin: 0;
  padding: 8px;
`
const H3 = styled.h3`
  margin: 0 0 10px 0;
`