const initialState = {
  user: null,
  content: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET-USER":
      console.log(action.user);
      return {
        ...state,
        user: action.user,
      };
    case "ADD-STREAM-TWEET":
      console.log(state.content);
      let newContent = [...state.content];
      newContent.push(action.tweet);
      if (newContent.length > 5) newContent = newContent.slice(1);

      return {
        ...state,
        content: newContent,
      };
    case "CLEAR-CONTENT-ASYNC":
      return initialState;
    default:
      return state;
  }
}
