import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { updateCard } from '../actions/cards'

// Selectors
import { cardById } from '../selectors/cards'

// Components
import { ChildCardSelector } from './ChildCardSelector'

function Card({ cardId }) {
  const [editorOpen, setEditorOpen] = useState(false)
  const card = useSelector(cardById(cardId))
  const dispatch = useDispatch()

  const toggleEditorOpen = () => setEditorOpen(!editorOpen)

  const handleChange = (event) => {
    dispatch(updateCard(cardId, event.target.value))
  }

  useEffect(() => {
    console.log(`CardId ${cardId} is updating...`)
  })

  return (
    <li>
      {editorOpen ? (
        <Fragment>
          <input type="text" onChange={handleChange} value={card.value} />
          <ChildCardSelector cardId={cardId} />
        </Fragment>
      ) : (
        card.value
      )}
      <button onClick={toggleEditorOpen}>Edit</button>
    </li>
  )
}

const MemoizedCard = React.memo(Card)

export { MemoizedCard as Card }
