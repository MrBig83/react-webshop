import React, {
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";

interface IuserData {
  email: string;
  firstName: string;
  isAdmin: boolean;
  lastName: string;
  _id: string;
}

interface UserContextProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  login: () => Promise<void>;
  logOut: () => Promise<void>;
  auth: () => Promise<void>;
  test: () => Promise<void>;
  data: IuserData;
}

export const UserContext = createContext<UserContextProps>(null as any);

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<IuserData>({
    email: "",
    firstName: "",
    isAdmin: false,
    lastName: "",
    _id: "",
  });

  const login = async (): Promise<void> => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const data = await res.json();

      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const logOut = async (): Promise<void> => {
    await fetch("/api/users/logout", {
      method: "POST",
    });
    const data: IuserData = {
      email: "",
      firstName: "",
      isAdmin: false,
      lastName: "",
      _id: "",
    };

    setData(data);
  };

  const auth = async (): Promise<void> => {
    const response = await fetch("/api/users/authorize");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    auth();
  }, []);

  const test = async (): Promise<void> => {
    console.log("Test i frontend");
    
    try {
      const response = await fetch("/api/users/test");
      if (!response.ok) {
        throw new Error(`Fetch request failed with status ${response.status}`);
      }
      console.log(response);
      
      const data = await response.json();
      console.log("Response data:", data);
      // Further handling of the received data
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  
  useEffect(() => {
    test();
  }, []);

  return (
    <UserContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        login,
        logOut,
        auth,
        test, 
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
