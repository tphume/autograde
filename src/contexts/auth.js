import React, { useEffect, useReducer } from "react";

export const AuthContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      const { role, name, token } = action.type.payload;
      return { isAuth: true, role, name, token };
    case "LOGOUT":
      return { isAuth: false, role: "", name: "", token: "" };
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
          name: "",
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
