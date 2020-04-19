import React, { useState } from 'react'

import Card from './Card'

export default function RenderCard({
  cards,
  handleCardClick,
  close,
  bookmarkImage,
  setSelectedCard,
  selectedCard,
}) {
  const [cardDetailsVisible, setCardDetailsVisible] = useState(false)

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
    />
  ))
}
