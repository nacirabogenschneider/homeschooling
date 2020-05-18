import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import close from '../images/close.svg'
import RenderTasks from '../components/RenderTasks'
import { firestore } from '../firebase'
import CardDetailForm from '../components/CardDetailForm'


export default function CardDetails({ id, setCardDetailsVisible, cards, cardPreview }) {
  const [card, setCard] = useState()
  const cardRef = firestore.doc(`cards/${id}`)
  const [tasks, setTasks] = useState()
  
  useEffect(() => {
    const find = cards.find((card) => card.id === id)
    setCard(find)
  }, [card])


  async function handleCloseClick() {
    cardRef.update({ isClicked: false })
    setCardDetailsVisible(false)
  }
  
  return (
    <DetailSection id={card && card.id}>
      <Header>
        <ImgClose
          id={card && card.id}
          src={close}
          onClick={handleCloseClick}
        ></ImgClose>
      </Header>
      <HeaderImage src={cardPreview}></HeaderImage>
      <ContentSection>
        <div>
          <h2 style={{ color: 'orange' }}>Basis-Informationen</h2>
          <h2>Titel: {card && card.title}</h2>
          <small>Autor: {card && card.author}</small>
          <p>Beschreibung: {card && card.description}</p>
        </div>
      </ContentSection>
      <CardDetailSection>
        <h2 style={{ color: 'orange' }}>Detail-Informationen</h2>
         <RenderTasks id={id} tasks={tasks} setTasks={setTasks}/> 
        <CardDetailForm tasks={tasks}setTasks={setTasks} card={card} />
      </CardDetailSection>
      <div style={{padding: '0 10px 40px 10px', color: 'lightgrey'}}> &#169; 2020 Nacira Design</div>
      <Footer></Footer>
    </DetailSection>
  )
}


const HeaderImage = styled.img`
object-fit: cover; 
object-position: center; 
height: 250px;
width: 100%;
box-shadow: 0 0 10px 2px #cfcfcf;
`
const DetailSection = styled.div`
  position: absolute;
  top: 10px;
  padding: 0;
  left: 10px;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  border-radius: 12px;
  opacity: 0.99;
  background: white;
  z-index: 400;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
const ContentSection = styled.section`
  padding: 30px 8px;
  margin: 8px;
  height: 100vh;
`
const CardDetailSection = styled.section`
  padding: 8px;
  margin: 8px 16px 50px 16px;
`
const Header = styled.header`
  background: linear-gradient(to left, #5e99cf, #5ebd99);
  position: fixed;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  justify-content: flex-end;
  left: 10px;
  right: 10px;
  z-index: 300;
`
const Footer = styled.footer`
  color: white;
  background: linear-gradient(to right, #5e99cf, #5ebd99);
  position: fixed;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 4px;
  height: 30px;
  left: 10px;
  right: 10px;
  bottom: 10px;
`
const ImgClose = styled.img`
  height: 26px;
  padding: 5px;
`
