export const initialState = {
  accepted: [],
  rejected: []
};

const ACCEPT_IMAGE = 'ACCEPT_IMAGE';
const REJECT_IMAGE = 'REJECT_IMAGE';

export const LOCAL_STATE_KEY = 'localState'

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem(LOCAL_STATE_KEY)) || initialValue;

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACCEPT_IMAGE:
    return {...state, accepted: [action.payload, ...state.accepted]}

    case REJECT_IMAGE:
      return {...state, rejected: [action.payload, ...state.rejected]}

    default:
      return state;
  }
};

export const acceptImage = (payload) => ({
  type: ACCEPT_IMAGE,
  payload
});

export const rejectImage = (payload) => ({
  type: REJECT_IMAGE,
  payload
});
