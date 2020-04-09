import React from 'react'
import { useSelector } from 'react-redux'

// Selectors
import { allCardIds } from '../selectors/cards'

// Components
import { Card } from './Card'

export function CardList() {
  const cardIds = useSelector(allCardIds)

  return (
    <ul>
      {cardIds.map((cardId) => {
        return <Card key={cardId} cardId={cardId} />
      })}
    </ul>
  )
}
