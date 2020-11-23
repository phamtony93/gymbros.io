export const initialState = {
  authorized: false,
  user: null,
  map_marker: {
    lat: -1.2884,
    lng: 36.8233,
  },
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_AUTHORIZED":
      return {
        ...state,
        authorized: action.authorized,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_MAP_MARKER":
      return {
        ...state,
        map_marker: action.map_marker,
      };
    default:
      return state;
  }
};

export default reducer;
