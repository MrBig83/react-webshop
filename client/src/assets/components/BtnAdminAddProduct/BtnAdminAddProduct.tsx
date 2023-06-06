
// import { useContext, useEffect, useState } from "react";

import "./BtnAdminAddProduct.css";
import IProduct from "../../interfaces/Interfaces";
import React, { useState } from 'react';
import { Button, Col, Drawer, Form, Input, InputNumber, Row, Checkbox } from 'antd';

import UserContextProvider from "../../../context/UserContext"

const BtnAdminAddProduct = () => {
  const [open, setOpen] = useState(false);
  
  //Sätt nedan i en annan fil sen
  async function addToDatabase(values:IProduct){
      const response = await fetch (`/api/products/`,{
          method: "POST", 
          headers: {
              "Content-Type": "application/json"
          },
          
          body: JSON.stringify(values)
        })
        console.log("values");
        console.log(values);

      const res = response.json()
      console.log(res);
  }
  //Sätt ovan i en annan fil sen

  const showEditDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showEditDrawer} >
        Lägg till produkt
      </Button>
      <Drawer
        title="Lägg till produkt"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}

      >
        <Form layout="vertical" hideRequiredMark
            onFinish={(values) => addToDatabase(values)}
            onFinishFailed={onFinishFailed}
        >
          <Row gutter={16}>
            <Col span={12}>

              <Form.Item
                name="title"
                label="Titel"
                rules={[{ required: false, message: "Fyll i produkttitel" }]}
              >
                <Input placeholder = "Produktnamn" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Pris"
                rules={[{ required: false,  }]}
              >
                
                <InputNumber placeholder = "Pris" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="_id"
                label="Id"
                rules={[{ required: false,  }]}
              >
                <Input disabled={false} placeholder = "ProduktID (Lämna tomt)" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="inStock"
                label="Saldo"
                rules={[{ required: false,  }]}
              >
                <InputNumber placeholder = "Antal i lager" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="image"
                label="Bild Url"
                rules={[{ required: false, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="URL till produktbild"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>

            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Beskrivning"
                rules={[
                  {
                    required: false,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Produktbeskrivning" />
              </Form.Item>
              </Col>
          </Row>
            
          <Button type="primary" htmlType="submit">
              Spara
            </Button>
            <Button onClick={onClose}>Avbryt</Button>
        </Form>
      </Drawer>
    </>
  );
};






export default BtnAdminAddProduct;
