import React, { useState } from 'react';

import IProduct from '../../interfaces/IProduct';
import { Button, Col, Drawer, Form, Input, Row, Radio, InputNumber } from 'antd';

const AdminEditDrawer = ({ product }: { product: IProduct }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
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
            onFinish={(values) => updateDatabase(values, product._id)}
            onFinishFailed={onFinishFailed}
            initialValues={{
              ["title"]: product.title,
              ["price"]: product.price,
              ["_id"]: product._id,
              ["inStock"]: product.inStock,
              ["image"]: product.image,
              ["description"]: product.description, 
              ["deleted"]: false
            }}

        >
          <Row gutter={16}>
            <Col span={12}>

              <Form.Item
                name="title"
                label="Titel"
                rules={[{ required: false, message: "Fyll i produkttitel" }]}
              >
                <Input defaultValue = {product.title} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Pris"
                rules={[{ required: false,  }]}
              >
                
                <InputNumber defaultValue = {product.price} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="_id"
                label="Id"
                rules={[{ required: false,  }]}
              >
                <Input disabled={true} defaultValue = {product._id} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="inStock"
                label="Saldo"
                rules={[{ required: false,  }]}
              >
                <InputNumber defaultValue = {product.inStock} />
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
                    required: false,
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
            label="Borttagen?"
            name="deleted">
          <Radio.Group onChange={onChange} defaultValue={false}>
            <Radio value={true}> Ja </Radio>
            <Radio value={false}> Nej </Radio>
          </Radio.Group>
        </Form.Item>
            </Col> 
          <Button type="primary" htmlType="submit">
              Spara
            </Button>
            <Button onClick={onClose}>Avbryt</Button>
        </Form>
      </Drawer>
    </>
  );
};

export default AdminEditDrawer;