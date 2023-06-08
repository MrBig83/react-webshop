import { NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import "./MobileMenu.css";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="menu-icon">
        <MenuOutlined onClick={showDrawer} />
      </div>
      <Drawer placement="left" open={open} width={"100%"}>
        <ul className="mobile-menu">
          <li>
            <NavLink onClick={onClose} to="/">
              hem
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onClose} to="/produkter">
              produkter
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onClose} to="/rea">
              rea
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onClose} to="/kontakta-oss">
              kontakta oss
            </NavLink>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
