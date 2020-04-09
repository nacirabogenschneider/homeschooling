import React from 'react'
import styled from 'styled-components/macro'
import bookmark from '../images/bookmark.svg'

export default function Card() {
  return (
    <CardBox>
      <Image src={bookmark}></Image>
      <Preview></Preview>
      <StyledRows>
        <TextFieldH5>Thema</TextFieldH5>
      </StyledRows>
      <StyledRows>
        <TextField>Beschreibung</TextField>
      </StyledRows>
      <StyledRows>
        <TextField>Autor</TextField>
      </StyledRows>
      <ButtonWrapper>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
      </ButtonWrapper>
    </CardBox>
  )
}

const CardBox = styled.section`
  display: block;
  width: 220px;
  height: 300px;
  margin: 12px 6px;
  background: linear-gradient(to right, #f7f6f2, #f1f1ee);
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
const StyledButton = styled.div`
  border: none;
  margin: 0 4px;
  box-shadow: 0 0 6px 2px #cfcfcf;
  border-radius: 50%;
  background: white;
  height: 20px;
  width: 20px;
`
const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  left: 160px;
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
