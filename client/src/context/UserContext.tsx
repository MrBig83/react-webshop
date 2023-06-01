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
  data: IuserData;
}

export const UserContext = createContext<UserContextProps | null>(null);

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
      // Handle errors
    }
  };

  //här loggar vi ut

  const logOut = async (): Promise<void> => {
    await fetch("/api/users/logout", {
      method: "POST",
    });
    const data: IuserData = {
      // Update the assignment
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
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
