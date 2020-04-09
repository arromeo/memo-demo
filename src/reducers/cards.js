import { cardActions } from '../actions/cards'

const initialState = {
  1: {
    name: 'card 1'
  },
  2: {
    name: 'card 2'
  },
  3: {
    name: 'card 3'
  }
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardActions.UPDATE_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          name: action.value
        }
      }
    default:
      return state
  }
}
