import io from "socket.io-client";

const socket = io("http://localhost:8888/", {
  autoConnect: false,
  cors: {
    origin: "*",
  },
});

export const initialState = {
  user: null,
  chats: [],
  socket: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "OPEN_SOCKET":
      socket.open();
      return {
        ...state,
        socket: socket,
      };
    default:
      return state;
  }
};

export default reducer;
