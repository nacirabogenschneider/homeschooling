import React from 'react'

import Card from './Card'

export default function RenderCard({
  cards,
  handleCardClick,
  handleCloseClick,
  close,
  bookmarkImage,
}) {
  return cards.map((card) => (
    <Card
      bookmarkImage={bookmarkImage}
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
      levelStyle={card.levelStyle}
    />
  ))
}
