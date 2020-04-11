import { v4 as uuidv4 } from 'uuid'

export const cardActions = {
  ADD_CARD: 'card/add',
  ADD_CHILD: 'card/addChild',
  UPDATE_CARD: 'card/update'
}

export const addCard = (value) => ({
  type: cardActions.ADD_CARD,
  id: uuidv4(),
  value
})

export const addChild = (parentId, childId) => ({
  type: cardActions.ADD_CHILD,
  parentId,
  childId
})

export const updateCard = (id, value) => ({
  type: cardActions.UPDATE_CARD,
  id,
  value
})
