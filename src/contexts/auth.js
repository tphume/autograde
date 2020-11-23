import React, { useEffect, useReducer } from "react";

export const AuthContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      const { username, token, id } = action.payload;
      return { isAuth: true, username, token, id };
    case "LOGOUT":
      return { isAuth: false, username: "", token: "", id: -1 };
    default:
      return state;
  }
}

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {}, () => {
    const localData = localStorage.getItem("authState");
    return localData
      ? JSON.parse(localData)
      : {
          isAuth: false,
          username: "",
          token: "",
          id: -1,
        };
  });

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
