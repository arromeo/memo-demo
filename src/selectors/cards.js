export const allCardIds = (state) => Object.keys(state.cards)

export const allCards = (state) => Object.values(state.cards)

export const cardById = (id) => (state) => state.cards[id]

export const childCardNames = (id) => (state) => {
    console.log('happening')
  if (state.cards[id].children.length === 0) return []
  return state.cards[id].children.map((child) => state.cards[child].value)
}
