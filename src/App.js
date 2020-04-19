import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
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
import RenderCards from './components/RenderCards'
import Filter from './components/Filter'
import bookmarkImage from './images/bookmark.svg'
import refresh from './images/refresh.svg'
import { firestore } from './firebase'
import { collectIdsAndDocs } from './utilities.js'
import close from './images/close.svg'
import CardDetailForm from './components/CardDetailForm'

function App() {
  const hamburgSchool = hamburg.hamburg
  const schoolName = 'Schulauswahl'
  const classesTitle = 'Jahrgangsfilter'
  const subjectsTitle = 'Fächerauswahl'
  const [schoolOption, setSchoolOption] = useState([])
  const [classesValue, setClassesValue] = useState()
  const [subjectsValue, setSubjectsValue] = useState()
  const [schoolValue, setSchoolValue] = useState()
  const [cards, setCards] = useState([])
  const [levelStyle, setLevelStyle] = useState([
    { styleLevelBetter: { boxShadow: 'inset 0 0 6px 2px lightgrey' } },
    { styleLevelNormal: { boxShadow: 'inset 0 0 6px 2px lightgrey' } },
    { styleLevelLow: { boxShadow: 'inset 0 0 6px 2px lightgrey' } },
  ])
  const [level, setLevel] = useState('')
  const [filteredCards, setFilteredCards] = useState(cards)
  const [selectedCard, setSelectedCard] = useState()

  function getCardsFromDatabase() {
    firestore.collection('cards').onSnapshot((snapshot) => {
      const dbCards = snapshot.docs.map(collectIdsAndDocs)
      setCards(dbCards)
      setFilteredCards(dbCards)
    })
  }

  useEffect(() => {
    getCardsFromDatabase()
  }, [])

  useEffect(() => {
    if (level === 'better') {
      setLevelStyle([
        { styleLevelBetter: { boxShadow: 'inset 0 0 6px 2px green' } },
        { styleLevelNormal: { boxShadow: 'inset 0 0 6px 2px green' } },
        { styleLevelLow: { boxShadow: 'inset 0 0 6px 2px green' } },
      ])
    } else if (level === 'normal') {
      setLevelStyle([
        { styleLevelBetter: { boxShadow: 'inset 0 0 6px 2px lightgrey' } },
        { styleLevelNormal: { boxShadow: 'inset 0 0 6px 2px green' } },
        { styleLevelLow: { boxShadow: 'inset 0 0 6px 2px green' } },
      ])
    } else if (level === 'low') {
      setLevelStyle([
        { styleLevelBetter: { boxShadow: 'inset 0 0 6px 2px lightgrey' } },
        { styleLevelNormal: { boxShadow: 'inset 0 0 6px 2px lightgrey' } },
        { styleLevelLow: { boxShadow: 'inset 0 0 6px 2px green' } },
      ])
    }
  }, [level, setLevelStyle])

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
    { value: 'Englisch', label: 'Englisch' },
    { value: 'Medien', label: 'Medien' },
    { value: 'Sport', label: 'Sport' },
    { value: 'Musik', label: 'Musik' },
    { value: 'Kunst', label: 'Kunst' },
    { value: 'Sachkunde', label: 'Sachkunde' },
    { value: 'Religion', label: 'Religion' },
    { value: 'Theater', label: 'Theater' },
  ]

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
              <DescriptionSection>
                <h1>Home Schooling - Schule zu Hause</h1>
                <h2>Hier könnte noch etwas zum Inhalt stehen</h2>
                <p>Und hier gibt es etwas zur Anwendung usw.</p>
              </DescriptionSection>
              <CardSectionWrapper>
                <CardSection>
                  <RenderCards
                    levelStyle={levelStyle}
                    bookmarkImage={bookmarkImage}
                    cards={filteredCards}
                  />
                </CardSection>
              </CardSectionWrapper>
            </Route>
          </Switch>
          <Switch>
            <Route path="/create">
              <YousCards>
                <StyledHeading>Deine Basis-Karten</StyledHeading>
                <CardSection>
                  <RenderCards
                    levelStyle={levelStyle}
                    close={close}
                    cards={cards}
                  />
                </CardSection>
                <StyledHeading>Deine Detail-Karten</StyledHeading>
                <Create
                  level={level}
                  setLevel={setLevel}
                  levelStyle={levelStyle}
                  cards={cards}
                  setCards={setCards}
                  schoolOption={schoolOption}
                  schoolName={schoolName}
                  classes={classes}
                  classesTitle={classesTitle}
                  subjects={subjects}
                  subjectsTitle={subjectsTitle}
                />
              </YousCards>
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
              <Favourite
                cards={cards}
                levelStyle={levelStyle}
                bookmarkImage={bookmarkImage}
              />
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
const YousCards = styled.div`
  margin: 40px 24px;
  width: 100vw;
  display: flex;
  flex-direction: column;
`
const AppGrid = styled.section`
  display: grid;
  grid-template-rows: 100px 1fr 120px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  @media (max-width: 576px) {
    grid-template-rows: 60px 1fr 60px;
  }
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
const StyledHeading = styled.h1`
  margin: 40px;
`
