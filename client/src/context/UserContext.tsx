

import React, { PropsWithChildren, createContext, useState } from 'react';

interface UserContextProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  login: () => Promise<void>;
  logOut: () => Promise<void>;
  auth: () => Promise<void>;
  data: {}
}


export const UserContext = createContext<UserContextProps | null>(null);

const UserContextProvider = ({ children }:PropsWithChildren) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([])
 
  
  const login = async (): Promise<void> => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
      });

      const data = await res.json();
      console.log(data);

      setData(data)
      // Handle the response data as needed

    } catch (err) {
      console.log(err);
      // Handle errors
    }
  };

  //här loggar vi ut

  const logOut = async (): Promise<void> => {
    
    try {
      const res = await fetch("/api/users/logout", {
        method: "POST"
         
      });
      const data = ''

      setData(data)
      console.log(data)
      // Handle the response data as needed

    } catch (err) {
      console.log(err);
      // Handle errors
    }
  };

  const auth = async(): Promise<void> => {
      const response = await fetch("/api/users/authorize")
      const data = await response.json();
      console.log(data);

  }
  return (
    <UserContext.Provider value={{ email, password, setEmail, setPassword, login, logOut,  auth, data }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
