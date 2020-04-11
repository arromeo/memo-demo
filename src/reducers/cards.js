import { cardActions } from '../actions/cards'

export const cardsReducer = (state = {}, action) => {
  switch (action.type) {
    case cardActions.ADD_CARD:
      return {
        ...state,
        [action.id]: {
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
