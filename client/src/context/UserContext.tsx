

import React, { PropsWithChildren, createContext, useState } from 'react';

interface UserContextProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  login: () => Promise<void>;
}


export const UserContext = createContext<UserContextProps | null>(null);

const UserContextProvider = ({ children }:PropsWithChildren) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(data.firstName);
      // Handle the response data as needed

    } catch (err) {
      console.log(err);
      // Handle errors
    }
  };

  return (
    <UserContext.Provider value={{ email, password, setEmail, setPassword, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
