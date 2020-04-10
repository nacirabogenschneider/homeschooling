import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Filter from './components/Filter'
import Card from './components/Card'
import * as hamburg from './data/hamburg.json'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

import add from './images/add.svg'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Plan from './pages/Plan'
import Favourite from './pages/Favourite'
import Classroom from './pages/Classroom'
import Navigation from './components/Navigation'

function App() {
  const hamburgSchool = hamburg.hamburg
  const schoolName = 'Schulauswahl'
  const classesTitle = 'Jahrgangsfilter'
  const subjectsTitle = 'Fächerauswahl'
  const [schoolOption, setSchoolOption] = useState([])
  const [classesValue, setClassesValue] = useState({})
  const [subjectsValue, setSubjectsValue] = useState({})
  const [schoolValue, setSchoolvalue] = useState({})

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
          <Navigation />
        </HeaderSection>
        <ContentWrapper>
          <Switch>
            <Route exact path="/">
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
              <DescriptionSection>
                <h1>Home Schooling - Schule zu Hause</h1>
                <h2>Hier könnte noch etwas zum Inhalt stehen</h2>
                <p>Und hier gibt es etwas zur Anwendung usw.</p>
              </DescriptionSection>
              <CardSectionWrapper>
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
              </CardSectionWrapper>
            </Route>
          </Switch>
          <Switch>
            <Route path="/create">
              <Create
                schoolOption={schoolOption}
                schoolName={schoolName}
                classes={classes}
                classesTitle={classesTitle}
                subjects={subjects}
                subjectsTitle={subjectsTitle}
              />
            </Route>
          </Switch>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Switch>
            <Route path="/plan">
              <Plan />
            </Route>
          </Switch>
          <Switch>
            <Route path="/favourite">
              <Favourite />
            </Route>
          </Switch>
          <Switch>
            <Route path="/classroom">
              <Classroom />
            </Route>
          </Switch>
          <CreateButton to="/create">
            <CreateButtonImage
              src={add}
              alt="create button"
            ></CreateButtonImage>
          </CreateButton>
        </ContentWrapper>
        <FooterSection></FooterSection>
      </AppGrid>
    </Router>
  )
}

export default App

const AppGrid = styled.section`
  display: grid;
  grid-template-rows: 100px 1fr 120px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`
const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to left, #5e99cf, #5ebd99);
  box-shadow: 0 0 10px 2px #cfcfcf;
`

const ContentWrapper = styled.section`
  display: flex;
  width: 100vw;

  flex-direction: column;
  justify-content: center;
`
const DescriptionSection = styled.section`
  display: flex;
  margin: 8px 20px;
  flex-direction: column;
  justify-content: center;
  margin: 20px 80px 50px 50px;
`
const CardSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`
const CardSection = styled.header`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: transparent;
  margin: 0 50px;
  @media (max-width: 768px) {
    margin: 0 0 50px 0;
    justify-content: center;
  }
`
const SelectFilter = styled.section`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  margin: 8px 20px;
`

const FooterSection = styled.header`
  background: linear-gradient(to right, #5e99cf, #5ebd99);
`
const CreateButton = styled(Link)`
  border: 3px solid #ffc000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  right: 12px;
  top: 90vh;
  bottom: 10vh;
`
const CreateButtonImage = styled.img`
  width: 50px;
  height: 50px;
`
