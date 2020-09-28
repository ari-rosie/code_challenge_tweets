const initialState = {
  user: null,
  content: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET-USER-ASYNC":
      return {
        ...state,
        user: action.user,
        content: action.data,
      };
    case "ADD-STREAM-TWEET":
      let newContent = [...state.content];
      newContent.push(action.tweet);
      if (newContent.length > 5) newContent = newContent.slice(1);

      return {
        ...state,
        content: newContent,
      };
    default:
      return state;
  }
}
