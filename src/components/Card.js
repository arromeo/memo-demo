import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

// Actions
import { updateCard } from '../actions/cards'

// Selectors
import { cardById } from '../selectors/cards'

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

function Card({ cardId, subjects }) {
  const [editorOpen, setEditorOpen] = useState(false)

  const card = useSelector(cardById(cardId))

  const [labels, setLabels] = useState({})

  const setLabel = (labelId, newLabel) => {
    setLabels((prev) => ({
      ...prev,
      [labelId]: newLabel
    }))
  }

  useEffect(() => {
    subjects[cardId].next(card.value)
    card.children.forEach((child) => {
      subjects[child].subscribe((v) => setLabel(child, v))
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dispatch = useDispatch()

  const toggleEditorOpen = () => setEditorOpen(!editorOpen)

  const handleChange = (event) => {
    dispatch(updateCard(cardId, event.target.value))
    subjects[cardId].next(event.target.value)
  }

  const onAddChild = (childId) => {
    subjects[childId].subscribe((v) => setLabel(childId, v))
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
      {editorOpen && (
        <ChildCardSelector cardId={cardId} onAddChild={onAddChild} />
      )}
      <ul>
        {card.children.map((child, index) => (
          <li key={index}>{labels[child]}</li>
        ))}
      </ul>
    </CardContainer>
  )
}

const MemoizedCard = React.memo(Card)

export { MemoizedCard as Card }
