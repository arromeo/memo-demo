import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { addChild, subscribe } from '../actions/cards'

// Selectors
import { allCards } from '../selectors/cards'

export function ChildCardSelector({ cardId }) {
  const cards = useSelector(allCards)
  const dispatch = useDispatch()

  const selectRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addChild(cardId, selectRef.current.value))
    dispatch(subscribe(selectRef.current.value, cardId))
  }

  return (
    <form onSubmit={handleSubmit}>
      <select ref={selectRef}>
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
