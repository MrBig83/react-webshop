
// import { useContext, useEffect, useState } from "react";

import "./BtnAdminEditProduct.css";
import IProduct from "../../interfaces/Interfaces";
import React, { useState } from 'react';
import { Button, Col, Drawer, Form, Input, Row } from 'antd';

const BtnAdminEditProduct = ({ product }: { product: IProduct }) => {
  const [open, setOpen] = useState(false);

  const showEditDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values: IProduct) => {
      
      updateDatabase(values, product._id);
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
            onFinish={onFinish}
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
                <Input placeholder = {product.title} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Pris"
                rules={[{ required: true,  }]}
              >
                {/* ======= Fixa typning av placeholder. Skall vara nummer. */}
                <Input placeholder = {product.price} />
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
                //   addonBefore="http://"
                //   addonAfter=".com"
                  placeholder={product.image}
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
                <Input.TextArea rows={4} placeholder={product.description} />
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


// const BtnAdminEditProduct = ({ product }: { product: IProduct }) => {
// //   const [productInCart, setIsProductsInCart] = useState(false);


// const editProduct = () => {
//     console.log("Edit product");
//     console.log(product.title);
//     //Öppna en drawer där vi redigerar specifik produkt. 

    
// }

//   return (
//     <button className="btnAdminEditProduct" onClick={editProduct}>
//       Redigera
//     </button>
//   );
// };

//Sätt nedan i en annan fil sen
async function updateDatabase(values:IProduct, id){ // =========== FIXA TYPNING PÅ ID =====
    const response = await fetch (`http://localhost:3000/api/products/${id}`,{
        method: "PUT", 
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
    const res = response.json()
    console.log(res);
    
    
    
    //console.log(values);
    
}

//Sätt ovan i en annan fil sen


export default BtnAdminEditProduct;
