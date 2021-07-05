export const allCardIds = (state) => Object.keys(state.cards)

export const allCards = (state) => Object.values(state.cards)

export const cardById = (id) => (state) => state.cards[id]
