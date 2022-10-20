import React, { useState, useEffect } from 'react';

// AuthContext is not a component
// AuthContext is an object that will contain a component.

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});


export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const storeUserLogin = localStorage
      .getItem('isLogginIn');

    if(storeUserLogin === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }} >
      {props.children}
    </AuthContext.Provider>
  )
};
export default AuthContext;