export const initialState = {
  heroes: [],
  loading: false,
  error: false,
}

export default function Reducer(state=initialState, action) {
  switch(action.type) {
    case 'TRIGGER_GET_HEROES':
      return {...state, loading: true}
    case 'TRIGGER_GET_HEROES_SUCCESS':
      return {...state, loading: false, heroes: action.heroData}
    case 'TRIGGER_GET_HEROES_ERROR':
      return {...state, loading: false, error: action.error}
    case 'TRIGGER_GET_HERO_BY_NAME':
      return {...state, loading: true}
    case 'TRIGGER_GET_HERO_BY_NAME_SUCCESS':
      return{...state, loading: false, heroes: action.heroData}
    case 'TRIGGER_GET_HERO_BY_NAME_ERROR':
      return {...state, loading: false, error: action.error}
    default:
      return state
  }
}
