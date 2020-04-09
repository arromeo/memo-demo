import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { updateCard } from '../actions/cards'

// Selectors
import { cardById } from '../selectors/cards'

export function Card({ cardId }) {
  const [editorOpen, setEditorOpen] = useState(false)
  const card = useSelector(cardById(cardId))
  const dispatch = useDispatch()

  const toggleEditorOpen = () => setEditorOpen(!editorOpen)

  const handleChange = (event) => {
    dispatch(updateCard(cardId, event.target.value))
  }

  useEffect(() => {
    console.log(`${card.name} is updating`)
  })

  return (
    <li>
      {editorOpen ? (
        <input type="text" onChange={handleChange} value={card.name} />
      ) : (
        card.name
      )}
      <button onClick={toggleEditorOpen}>Edit</button>
    </li>
  )
}
