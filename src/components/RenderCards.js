import React, { useState, useEffect } from 'react'
import Card from './Card'
import {getCards} from '../dbServices.js'

export default function RenderCard({
  cards,
  handleCardClick,
  close,
  bookmarkImage,
  setSelectedCard,
  selectedCard,
}) {
  const [cardDetailsVisible, setCardDetailsVisible] = useState(false)
  const [cardsDB, setCardsDB] = useState([])
  
  useEffect(()=>{
   const dataFromDb = getCards()
    setCardsDB(dataFromDb)
    console.log('DATA', dataFromDb)
  }, [])
  

  return cards.map((card) => (
    <Card
      bookmarkImage={bookmarkImage}
      close={close}
      handleCardClick={handleCardClick}
      key={card.cardId}
      id={card.id}
      title={card.title}
      description={card.description}
      isClicked={card.isClicked}
      author={card.author}
      color={card.color}
      isBookmarked={card.isBookmarked}
      levelStyle={card.levelStyle}
      cards={cards}
      cardDetailsVisible={cardDetailsVisible}
      setCardDetailsVisible={setCardDetailsVisible}
      setSelectedCard={setSelectedCard}
      selectedCard={selectedCard}
      cardPreview={card.cardPreview}
    />
  ))
}
