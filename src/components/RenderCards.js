import React, { useState, useEffect } from 'react'

import Card from './Card'

export default function RenderCard({
  cards,
  handleCardClick,
  handleCloseClick,
  close,
}) {
  console.log('RENDERCARDS', cards)
  return cards.map((card) => (
    <Card
      close={close}
      handleCloseClick={handleCloseClick}
      handleCardClick={handleCardClick}
      key={card.id}
      id={card.id}
      title={card.title}
      description={card.description}
      author={card.author}
      color={card.color}
      isBookmarked={card.isBookmarked}
      setIsBookmarked={card.setIsBookmarked}
    />
  ))
}
