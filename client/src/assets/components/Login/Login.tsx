import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Drawer } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import "./Login.css";

const Login = () => {
  const { data } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
