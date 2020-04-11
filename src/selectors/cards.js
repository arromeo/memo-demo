export const allCardIds = (state) => Object.keys(state.cards)

export const allCards = (state) => Object.values(state.cards)

export const cardById = (id) => (state) => state.cards[id]

const emptyArray = []

export const childCardNames = (id) => (state) => {
  console.log('--------------------------')
  if (state.cards[id].children.length === 0) return emptyArray
  return state.cards[id].children.map((child) => state.cards[child].value)
}
