import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// Actions
import { addCard } from '../actions/cards'

// Selectors
import { allCardIds } from '../selectors/cards'

// Components
import { Card } from './Card'

export function CardList() {
  const cardIds = useSelector(allCardIds, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('CardList is updating...')
  })

  const handleAddButtonClick = () => dispatch(addCard('new card'))

  return (
    <Fragment>
      <button onClick={handleAddButtonClick}>+</button>
      <ul>
        {cardIds.map((cardId) => {
          return <Card key={cardId} cardId={cardId} />
        })}
      </ul>
    </Fragment>
  )
}
