import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { addChild } from '../actions/cards'

// Selectors
import { allCards } from '../selectors/cards'

export function ChildCardSelector({ cardId }) {
  const cards = useSelector(allCards)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addChild(cardId, event.target.value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <select>
        {cards.map((card) => (
          <option key={card.id} value={card.id}>
            {card.value}
          </option>
        ))}
      </select>
      <button type="submit">Add Child</button>
    </form>
  )
}
