import { useState, useContext } from 'react';
import IOrder from '../../interfaces/IOrder';
import { Button, Col, Drawer, Form, Input, Row, Radio, RadioChangeEvent } from 'antd';
import {  OrderContext } from "../../../context/OrderContext"
import "../Buttons/BtnStyle/BtnStyle.css"

const AdminEditOrderDrawer = ({ order }: { order: IOrder }) => {
  const [open, setOpen] = useState(false);
  const { updateOrder } = useContext(OrderContext)

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
 
  };
  return (
    <>
      <Button className='btnStyle' type="primary" onClick={showDrawer}>
        Redigera Order
      </Button>

      <Drawer
        title="Redigera order"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form 
            layout="vertical" hideRequiredMark
            onFinish={(values) => updateOrder(values, order._id)}
            onFinishFailed={onFinishFailed}
            initialValues={{
              ["_id"]: order._id,
            }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="_id"
                label="Id"
              >
                <Input disabled={true} value = {order._id} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>

            <Col span={12}>
              <Form.Item
                name="orderNumber"
                label="Ordernummer:"
              >
                <Input disabled={true} value = {order.orderNumber} />
              </Form.Item>
            </Col>
          </Row>
            <Col span={24}>
            <Form.Item 
            label="Skickad?"
            name="shipped">
          <Radio.Group onChange={onChange} value={false}>
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
export default AdminEditOrderDrawer;