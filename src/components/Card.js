import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

// Actions
import { updateCard } from '../actions/cards'

// Selectors
import { cardById, childCardNames } from '../selectors/cards'

// Components
import { ChildCardSelector } from './ChildCardSelector'

const CardContainer = styled.div`
  background-color: tan;
  border: thin solid black;
  max-width: 400px;
  margin: 12px;
  padding: 8px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

function Card({ cardId }) {
  const [editorOpen, setEditorOpen] = useState(false)

  const card = useSelector(cardById(cardId))
  const childCards = useSelector(childCardNames(cardId))

  const dispatch = useDispatch()

  const toggleEditorOpen = () => setEditorOpen(!editorOpen)

  const handleChange = (event) => {
    dispatch(updateCard(cardId, event.target.value))
  }

  useEffect(() => {
    console.log(`CardId ${cardId} is updating...`)
  })

  return (
    <CardContainer>
      <CardHeader>
        {editorOpen ? (
          <input type="text" onChange={handleChange} value={card.value} />
        ) : (
          card.value
        )}
        <button onClick={toggleEditorOpen}>Edit</button>
      </CardHeader>
      {editorOpen && <ChildCardSelector cardId={cardId} />}
      <ul>
        {childCards.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </CardContainer>
  )
}

const MemoizedCard = React.memo(Card)

export { MemoizedCard as Card }
