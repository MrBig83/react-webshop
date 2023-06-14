/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react';
// import IProduct from '../../interfaces/IProduct';
import "../Buttons/BtnStyle/BtnStyle.css"
import { Button, Col, Drawer, Form, Input, Row, Radio, InputNumber, RadioChangeEvent } from 'antd';
import {  ProductContext } from "../../../context/ProductContext"



const AdminAddProductDrawer = () => {
  const [open, setOpen] = useState(false);
  const { addProduct } = useContext(ProductContext);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
  };
  
  return (
    <>
      <Button className='btnStyle' type="primary" onClick={showDrawer}>
        Lägg till produkt
      </Button>
      <Drawer
        title="Redigera produkt"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form 
            layout="vertical" hideRequiredMark
            onFinish={(values) => addProduct(values)}
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
                
                <InputNumber placeholder = "Produkt pris" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="_id"
                label="Id"
                rules={[{ required: false,  }]}
              >
                <Input disabled={true} placeholder = "Produkt ID genereras automatiskt" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="inStock"
                label="Saldo"
                rules={[{ required: false,  }]}
              >
                <InputNumber placeholder = "Varor i lager" />
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
                placeholder= "Bild url"
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
                <Input.TextArea rows={4} placeholder= "Produktbeskrivning" />
              </Form.Item>
              </Col>
          </Row>
            <Col span={24}>
            <Form.Item 
            label="Dold produkt?"
            name="deleted">
          <Radio.Group onChange={onChange} defaultValue={false}>
            <Radio value={true}> Ja </Radio>
            <Radio value={false}> Nej </Radio>
          </Radio.Group>
        </Form.Item>
            </Col> 
          <Button className='btnStyle' type="primary" htmlType="submit" onClick={onClose}>
              Spara
            </Button>
            <Button className='btnStyle' onClick={onClose}>Avbryt</Button>
        </Form>
      </Drawer>
    </>
  );
};
export default AdminAddProductDrawer;