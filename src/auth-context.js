import React from 'react';
import {useContext,useEffect,useState} from 'react';
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: ()=>{},
  onLogIn:(email,password)=>{}
});
export const AuthContextProvider = (props)=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return(
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogOut:logoutHandler,onLogIn:loginHandler}}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext;
