export const cardActions = {
  UPDATE_CARD: 'card/update'
}

export const updateCard = (id, value) => ({
  type: cardActions.UPDATE_CARD,
  id,
  value
})
