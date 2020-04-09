import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

// Selectors
import { allCardIds } from '../selectors/cards'

// Components
import { Card } from './Card'

export function CardList() {
  const cardIds = useSelector(allCardIds, shallowEqual)

  useEffect(() => {
    console.log('CardList is updating...')
  })

  return (
    <ul>
      {cardIds.map((cardId) => {
        return <Card key={cardId} cardId={cardId} />
      })}
    </ul>
  )
}
