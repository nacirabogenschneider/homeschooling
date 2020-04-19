import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import RenderCards from '../components/RenderCards'

export default function Favourite({ cards, bookmarkImage, levelStyle }) {
  const [cardsWithBookmark, setCardsWithBookmark] = useState([])
  async function filterByBookmark() {
    const bookmardCards = await cards.filter(
      (card) => card.isBookmarked === true
    )
    setCardsWithBookmark(bookmardCards)
  }

  useEffect(() => {
    filterByBookmark()
  }, [cards])
  return (
    <div>
      <h1 style={{ margin: 45 }}>Deine Favouriten</h1>
      <CardSection>
        <RenderCards
          cards={cardsWithBookmark}
          levelStyle={levelStyle}
          bookmarkImage={bookmarkImage}
        />
      </CardSection>
    </div>
  )
}

const CardSection = styled.header`
  margin: 40px;
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: transparent;
  @media (max-width: 768px) {
    margin: 0 0 50px 0;
    justify-content: center;
  }
`
