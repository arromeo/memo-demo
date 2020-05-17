export const cardActions = {
  ADD_CARD: 'card/add',
  ADD_CHILD: 'card/addChild',
  UPDATE_CARD: 'card/update'
}

export const addCard = (value, id) => ({
  type: cardActions.ADD_CARD,
  id,
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
