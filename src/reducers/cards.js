import { cardActions } from '../actions/cards'

// Start with some mock data
const initialState = {
  1: {
    id: '1',
    value: 'Card 1',
    children: []
  },
  2: {
    id: '2',
    value: 'Card 2',
    children: ['1']
  },
  3: {
    id: '3',
    value: 'Card 3',
    children: ['2']
  },
  4: {
    id: '4',
    value: 'Card 4',
    children: ['2', '3']
  }
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardActions.ADD_CARD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          value: action.value,
          children: []
        }
      }
    case cardActions.ADD_CHILD:
      return {
        ...state,
        [action.parentId]: {
          ...state[action.parentId],
          children: state[action.parentId].children.concat(action.childId)
        }
      }
    case cardActions.UPDATE_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          value: action.value
        }
      }
    default:
      return state
  }
}
