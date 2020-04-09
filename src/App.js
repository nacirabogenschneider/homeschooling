import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Filter from './components/Filter'
import Card from './components/Card'
import * as hamburg from './data/hamburg.json'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import home from './images/home.svg'
import profile from './images/profile.svg'
import classroom from './images/class.svg'
import fav from './images/fav.svg'
import today from './images/today.svg'

function App() {
  const hamburgSchool = hamburg.hamburg
  const schoolName = 'Schulauswahl'
  const classesTitle = 'Jahrgangsfilter'
  const subjectsTitle = 'Fächerauswahl'
  const [schoolOption, setSchoolOption] = useState([])
  const [classesValue, setClassesValue] = useState({})
  const [subjectsValue, setSubjectsValue] = useState({})
  const [schoolValue, setSchoolvalue] = useState({})
  console.log('classesValue', classesValue)
  console.log('subjectsValue', subjectsValue)
  console.log('schoolValue', schoolValue)
  useEffect(() => {
    setSchoolOption(
      hamburgSchool.map((school) => ({
        value: school.name,
        label: school.name,
      }))
    )
  }, [hamburgSchool])

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
    { value: 'Sport', label: 'Sport' },
    { value: 'Musik', label: 'Musik' },
    { value: 'Kunst', label: 'Kunst' },
    { value: 'Lesen', label: 'Lesen' },
    { value: 'Schreiben', label: 'Schreiben' },
    { value: 'Sachkunde', label: 'Sachkunde' },
    { value: 'Religion', label: 'Religion' },
    { value: 'Biologie', label: 'Biologie' },
  ]

  return (
    <Router>
      <AppGrid>
        <HeaderSection>
          <SelectFilter>
            <Filter
              options={schoolOption}
              title={schoolName}
              setValue={setSchoolvalue}
            />

            <Filter
              options={classes}
              title={classesTitle}
              setValue={setClassesValue}
            />
            <Filter
              options={subjects}
              title={subjectsTitle}
              setValue={setSubjectsValue}
            />
          </SelectFilter>
          <Nav>
            <a href="/">
              <NavIcon src={home}></NavIcon>
              <span>Home</span>
            </a>
            <a href="">
              <NavIcon src={fav}></NavIcon>
              <span>Meine Favoriten</span>
            </a>
            <a href="">
              <NavIcon src={classroom}></NavIcon>
              <span>Meine Klasse</span>
            </a>
            <a href="">
              <NavIcon src={today}></NavIcon>
              <span>Mein Stundenplan</span>
            </a>
            <a href="">
              <NavIcon src={profile}></NavIcon>
              <span>Meine Profil</span>
            </a>
          </Nav>
        </HeaderSection>

        <Route path="/">
          <ContentWrapper>
            <DescriptionSection>
              <h1>Home Schooling - Schule zu Hause</h1>
              <h2>Hier könnte noch etwas zum Inhalt stehen</h2>
              <p>Und hier gibt es etwas zur Anwendung usw.</p>
            </DescriptionSection>
            <CardSection>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </CardSection>
          </ContentWrapper>
        </Route>
        <FooterSection></FooterSection>
      </AppGrid>
    </Router>
  )
}

export default App
const NavIcon = styled.img`
  height: 24px;
`
const AppGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 120px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`
const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to left, #5e99cf, #5ebd99);
  box-shadow: 0 0 10px 2px #cfcfcf;
`
const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`

const ContentWrapper = styled.section`
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
`
const DescriptionSection = styled.section`
  display: flex;
  margin: 8px 20px;
  flex-direction: column;
  justify-content: center;
`

const CardSection = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: transparent;
  @media (max-width: 668px) {
    flex-direction: column;
    align-items: stretch;
  }
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`
const SelectFilter = styled.section`
  display: flex;
  padding: 0 20px;
`

const FooterSection = styled.header`
  background: linear-gradient(to right, #5e99cf, #5ebd99);
`
