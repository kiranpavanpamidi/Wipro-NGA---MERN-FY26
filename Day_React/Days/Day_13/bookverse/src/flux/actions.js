import dispatcher from "./dispatcher";

export const addBookAction = (book) => {
  dispatcher.dispatch({
    type: "ADD_BOOK",
    payload: book,
  });
};
