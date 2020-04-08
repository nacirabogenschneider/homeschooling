import React, { useState } from 'react'
import styled from 'styled-components'
import Filter from './components/Filter'

function App() {
  const classesTitle = 'Jahrgangsfilter'
  const classes = [
    { value: 'Vorschule', label: 'Vorschule' },
    { value: 'Klasse 1', label: 'Klasse 1' },
    { value: 'Klasse 2', label: 'Klasse 2' },
    { value: 'Klasse 3', label: 'Klasse 3' },
    { value: 'Klasse 4', label: 'Klasse 4' },
  ]
  const subjectsTitle = 'Fächerauswahl'
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
  const [classesValue, setClassesValue] = useState({})
  const [subjectsValue, setSubjectsValue] = useState({})

  return (
    <AppGrid>
      <HeaderSection></HeaderSection>
      <ContentWrapper>
        <SelectFilter>
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
        <ContentSection> </ContentSection>
      </ContentWrapper>
      <FooterSection></FooterSection>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.section`
  display: grid;
  grid-auto-rows: 60px 1fr 60px;
  height: 100vh;
`
const ContentWrapper = styled.section`
  display: flex;
  margin: 20px;
`
const HeaderSection = styled.header`
  background: rgb(8 165 216);
`
const ContentSection = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: rgb(8 165 216);
  padding: 40px;
  background: rgb(250 250 250);
`
const SelectFilter = styled.section`
  display: flex;
  padding: 20px;

  flex-direction: column;
  justify-content: flex-start;
  border-right: 2px solid orange;
`

const FooterSection = styled.header`
  background: rgb(8 165 216);
`

const StyledTag = styled.span`
  background: white;
  font-size: 14px;
  margin: 8px;
  padding: 8px;
  border-radius: 16px;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
