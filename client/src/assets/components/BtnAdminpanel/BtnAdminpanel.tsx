import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Adminpanel from "../Adminpanel/Adminpanel"

const BtnAdminpanel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [childrenOrderDrawer, setOrderDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const showOrderDrawer = () => {
    setOrderDrawer(true);
  };


  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
  const onOrderDrawerClose = () => {
    setChildrenDrawer(false);
  };


  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Adminpanel
      </Button>
      <Drawer title="Adminpanel" width={520} closable={false} onClose={onClose} open={open}>
        <Button type="primary" onClick={showChildrenDrawer}>
          Administrera produkter
        </Button>
        <br />
        <br />
        <Button type="primary" onClick={showOrderDrawer}>
          Administrera Ordrar
        </Button>

        <Drawer
          title="Administrera produkter"
          width={620}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
        <Drawer
          title="Administrera ordrar"
          width={620}
          closable={false}
          onClose={onOrderDrawerClose}
          open={childrenOrderDrawer}
        >
          
          <Adminpanel />
          <Adminpanel />
        </Drawer>
        </Drawer>

      </Drawer>
    </>
  );
};

export default BtnAdminpanel;




// import { useContext, useEffect, useState } from "react";

// import "./BtnAdminpanel.css";
// import { Drawer } from "antd";

// function BtnAdminpanel() {

// const btnOpenAdminpanel = () => {
//     //Här skall vi öppna en drawer som innehåller adminpanelen.
//     // setOpen(true)
//     console.log("Öppna adminpanel")

// }
//     return (
//     <button className="btnadminpanel" onClick={btnOpenAdminpanel}>
//       Adminpanel
//     </button>
//   );
// }

// export default BtnAdminpanel;

