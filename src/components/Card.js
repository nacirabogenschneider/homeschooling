import React from 'react'
import styled from 'styled-components/macro'
import pink from '../images/pink.svg'
import { firestore } from '../firebase'
import CardDetails from '../pages/CardDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Card({
  title,
  description,
  author,
  color,
  isBookmarked,
  id,
  close,
  bookmarkImage,
  levelStyle,
  cards,
  cardDetailsVisible,
  setCardDetailsVisible,
  isClicked,
}) {
  const cardRef = firestore.doc(`cards/${id}`)
  const remove = () => cardRef.delete()
  const update = () => cardRef.update({ isBookmarked: !isBookmarked })

  function handleCardClick() {
    setCardDetailsVisible && setCardDetailsVisible(!cardDetailsVisible)
    cardRef.update({ isClicked: true })
  }

  return (
    <CardBox style={{ background: color }} id={id}>
      <ImgWrapper>
        <ImgClose src={close} id={id} onClick={remove}></ImgClose>
        <ImgBookmark
          src={!isBookmarked ? bookmarkImage : pink}
          onClick={update}
        ></ImgBookmark>
      </ImgWrapper>
      <div id={id} onClick={() => handleCardClick(id)}>
        <Preview></Preview>
        <StyledRows>
          <TextFieldH5>{title}</TextFieldH5>
        </StyledRows>
        <StyledRows>
          <TextField>{description}</TextField>
        </StyledRows>
        <StyledRows>
          <TextFieldAuthor>{author}</TextFieldAuthor>
        </StyledRows>
        <ButtonWrapper>
          <StyledButton style={levelStyle[0].styleLevelBetter}></StyledButton>
          <StyledButton style={levelStyle[1].styleLevelNormal}></StyledButton>
          <StyledButton style={levelStyle[2].styleLevelLow}></StyledButton>
        </ButtonWrapper>
      </div>
      <div
        style={
          isClicked && cardDetailsVisible
            ? { display: 'flex' }
            : { display: 'none' }
        }
      >

        <CardDetails
          setCardDetailsVisible={setCardDetailsVisible}
          cardDetailsVisible={cardDetailsVisible}
          cards={cards}
          id={id}
        />
      </div>
    </CardBox>
  )
}

const CardBox = styled.section`
  display: block;
  width: 220px;
  height: 300px;
  margin: 12px;
  border-radius: 14px;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
const Preview = styled.div`
  height: 110px;
  background: white;
  margin: 0 8px 8px 8px;
  box-shadow: inset 0 0 6px 2px #cfcfcf;
`
const StyledRows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  background: white;
  margin: 4px 8px;
  box-shadow: inset 0 0 6px 2px #cfcfcf;
`
const ImgWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
`
const ImgBookmark = styled.img`
  height: 40px;
  margin: -5px 2px 0 0;
`
const ImgClose = styled.img`
  height: 26px;
  padding: 5px;
`
const StyledButton = styled.div`
  border: none;
  margin: 0 4px;
  border-radius: 50%;
  background: white;
  height: 20px;
  width: 20px;
`
const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  right: -130px;
  bottom: -5px;
`
const TextFieldH5 = styled.h5`
  font-size: 1rem;
  margin: 0;
  padding: 4px 8px;
  color: grey;
`
const TextField = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 4px 8px;
  color: grey;
`
const TextFieldAuthor = styled.small`
  font-size: 0.7rem;
  margin: 0;
  padding: 4px 8px;
  color: grey;
`
