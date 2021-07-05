import React, { Fragment, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

// Actions
import { addCard } from '../actions/cards'

// Selectors
import { allCardIds } from '../selectors/cards'

// Components
import { Card } from './Card'

// Hooks
import { usePubSub } from '../hooks/usePubSub'

export function CardList() {
  const { subjects, register } = usePubSub()
  const cardIds = useSelector(allCardIds, shallowEqual)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    cardIds.forEach((card) => {
      register(card)
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('CardList is updating...')
  })

  const handleAddButtonClick = () => {
    const newCardId = uuidv4()
    const newCardLabel = 'new card'

    register(newCardId)
    dispatch(addCard(newCardLabel, newCardId))
  }

  return (
    <Fragment>
      <button onClick={handleAddButtonClick}>+</button>
      {cardIds.map((cardId) => {
        return <Card key={cardId} cardId={cardId} subjects={subjects} />
      })}
    </Fragment>
  )
}
