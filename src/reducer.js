export const initialState = {
  authorized: false,
  user: null,
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
    default:
      return state;
  }
};

export default reducer;
