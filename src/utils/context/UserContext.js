import { createContext } from "react";

const UserContext = createContext({
  name: "Dummy",
  location: null,
  avatar_url: null,
});

export default UserContext;
