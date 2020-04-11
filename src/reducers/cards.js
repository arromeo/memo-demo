import { cardActions } from '../actions/cards'

export const cardsReducer = (state = {}, action) => {
  switch (action.type) {
    case cardActions.ADD_CARD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          value: action.value,
          children: [],
          childLabels: [],
          subscribers: []
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
    case cardActions.SUBSCRIBE:
      return {
        ...state,
        [action.observableId]: {
          ...state[action.observableId],
          subscribers: state[action.observableId].subscribers.concat(
            action.subscriberId
          )
        },
        [action.subscriberId]: {
          ...state[action.subscriberId],
          childLabels: state[action.subscriberId].childLabels.concat({
            id: action.observableId,
            label: state[action.observableId].value
          })
        }
      }

    case cardActions.UPDATE_CHILD_LABELS:
      let result = { ...state }

      result[action.parentId].subscribers.forEach((subscriberId) => {
        result = {
          ...result,
          [subscriberId]: {
            ...result[subscriberId],
            childLabels: result[subscriberId].childLabels.map((label) =>
              label.id === action.parentId
                ? { id: action.parentId, label: action.value }
                : label
            )
          }
        }
      })

      return result
    default:
      return state
  }
}
