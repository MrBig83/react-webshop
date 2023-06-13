import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Drawer } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import { UserContext } from "../../../context/UserContext";
import { useContext, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const { data } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setLoggedIn(Boolean(data.firstName));
    setLogOut(Boolean(!data.firstName));
  }, [data.firstName]);

  useEffect(() => {
    if (loggedIn || logOut) {
      setOpen(false);
    }
  }, [loggedIn, logOut]);
  return (
    <div className="login-container">
      <UserOutlined onClick={showDrawer} />
      <Drawer
        title={data.firstName ? `${data.firstName}` : "Logga in"}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <LoginForm />
      </Drawer>
    </div>
  );
};

export default Login;
