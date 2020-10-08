import React, { useEffect, useReducer } from "react";

export const AuthContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      const { role, username, token } = action.payload;
      return { isAuth: true, role, username, token };
    case "LOGOUT":
      return { isAuth: false, role: "", username: "", token: "" };
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
          role: "",
          username: "",
          token: "",
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
