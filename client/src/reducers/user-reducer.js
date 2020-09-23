const initialState = {
  user: null,
  content: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET-USER":
      return {
        ...state,
        user: action.user,
        content: action.data,
      };
    default:
      return state;
  }
}
