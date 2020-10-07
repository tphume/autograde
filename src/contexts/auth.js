import React, { useEffect, useReducer } from "react";

const AuthContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      const { isTeacher, name, token } = action.type.payload;
      return { isAuth: true, isTeacher, name, token };
    case "LOGOUT":
      return { isAuth: false, isTeacher: false, name: "", token: "" };
    default:
      return state;
  }
}

function AuthContextProvider({ children }) {
  const [authState, authDispatch] = useReducer(reducer, {}, () => {
    const localData = localStorage.getItem("authState");
    return localData
      ? JSON.parse(localData)
      : {
          isAuth: false,
          isTeacher: false,
          name: "",
          token: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
