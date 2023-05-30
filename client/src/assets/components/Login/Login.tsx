import { UserOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import UserContextProvider from "../../../context/UserContext";

const Login = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return ( 
    <NavLink to=''>
            <UserOutlined onClick={showDrawer} />
            <Drawer
            title='Login'
            placement="right"
            onClose={onClose}
            open={open}>
              <UserContextProvider>
              <LoginForm />
             </UserContextProvider>
            </Drawer>
            </NavLink>  
  );
};

export default Login;