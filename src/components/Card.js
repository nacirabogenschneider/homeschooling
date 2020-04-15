import React, { useState } from 'react'
import styled from 'styled-components/macro'
import pink from '../images/pink.svg'
import { firestore } from '../firebase'

export default function Card({
  title,
  description,
  author,
  color,
  isBookmarked,
  id,
  handleCardClick,
  close,
  bookmarkImage,
  levelStyle,
}) {
  const cardRef = firestore.doc(`cards/${id}`)
  const remove = () => cardRef.delete()
  const update = () => cardRef.update({ isBookmarked: !isBookmarked })

  return (
    <CardBox style={{ background: color }} id={id} onClick={handleCardClick}>
      <ImgClose src={close} id={id} onClick={remove}></ImgClose>
      <Image
        src={!isBookmarked ? bookmarkImage : pink}
        onClick={update}
      ></Image>
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
const Image = styled.img`
  height: 40px;
  position: relative;
  left: 170px;
  top: -5px;
  text-shadow: 0 0 6px 2px green;
`
const ImgClose = styled.img`
  position: relative;
  height: 26px;
  top: -5px;
  left: 4px;
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
