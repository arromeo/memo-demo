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
          ui: {
            childLabels: [],
            subscribers: []
          }
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
          ui: {
            ...state[action.observableId].ui,
            subscribers: state[action.observableId].ui.subscribers.concat(
              action.subscriberId
            )
          }
        },
        [action.subscriberId]: {
          ...state[action.subscriberId],
          ui: {
            ...state[action.subscriberId].ui,
            childLabels: state[action.subscriberId].ui.childLabels.concat({
              id: action.observableId,
              label: state[action.observableId].value
            })
          }
        }
      }
    case cardActions.UPDATE_CHILD_LABELS:
      const result = {}

      Object.keys(state).forEach(
        (cardId) =>
          (result[cardId] = state[action.parentId].ui.subscribers.includes(
            cardId
          )
            ? {
                ...state[cardId],
                ui: {
                  ...state[cardId].ui,
                  childLabels: state[cardId].ui.childLabels.map((label) =>
                    label.id === action.parentId
                      ? { id: action.parentId, label: action.value }
                      : label
                  )
                }
              }
            : state[cardId])
      )

      return result
    default:
      return state
  }
}
