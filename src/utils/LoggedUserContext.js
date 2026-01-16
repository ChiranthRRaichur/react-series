import { createContext } from "react";

const LoggedUserContext = createContext({
  username: null,
  setUsername: () => {},
});

export default LoggedUserContext;
