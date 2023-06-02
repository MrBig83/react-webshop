
// import { useContext, useEffect, useState } from "react";

import "./BtnAdminEditProduct.css";
import IProduct from "../../interfaces/Interfaces";
import React, { useState } from 'react';
import { Button, Col, Drawer, Form, Input, InputNumber, Row, Checkbox } from 'antd';

import UserContextProvider from "../../../context/UserContext"

const BtnAdminEditProduct = ({ product }: { product: IProduct }) => {
  const [open, setOpen] = useState(false);
  
  //Sätt nedan i en annan fil sen
  async function updateDatabase(values:IProduct, id:string){
      const response = await fetch (`/api/products/${id}`,{
          method: "PUT", 
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
        Redigera
      </Button>
      <Drawer
        title="Redigera produkt"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}

      >
        <Form layout="vertical" hideRequiredMark
            onFinish={(values) => updateDatabase(values, product._id)}
            onFinishFailed={onFinishFailed}
        >
          <Row gutter={16}>
            <Col span={12}>

                <p>{product._id}</p>
              <Form.Item
                name="title"
                label="Titel"
                rules={[{ required: true, message: "Fyll i produkttitel" }]}
              >
                <Input defaultValue = {product.title} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Pris"
                rules={[{ required: true,  }]}
              >
                
                <InputNumber defaultValue = {product.price} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="_id"
                label="Id"
                rules={[{ required: true,  }]}
              >
                <Input disabled={false} defaultValue = {product._id} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="inStock"
                label="Saldo"
                rules={[{ required: true,  }]}
              >
                <InputNumber defaultValue = {product.inStock} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="image"
                label="Bild Url"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                defaultValue={product.image}
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
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} defaultValue={product.description} />
              </Form.Item>
              </Col>
          </Row>
            <Col span={24}>
              <Form.Item
                name="deleted"
                label="Borttagen?"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Checkbox checked={false} >Borttagen</Checkbox>
              </Form.Item>
            </Col> 
          {/* </Row> */}
          <Button type="primary" htmlType="submit">
              Spara
            </Button>
            <Button onClick={onClose}>Avbryt</Button>
        </Form>
      </Drawer>
    </>
  );
};






export default BtnAdminEditProduct;
