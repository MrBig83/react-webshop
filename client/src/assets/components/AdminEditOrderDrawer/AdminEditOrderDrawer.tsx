import { useState, useContext } from 'react';
import IOrder from '../../interfaces/IOrder';
import { Button, Col, Drawer, Form, Input, Row, Radio, RadioChangeEvent } from 'antd';
import {  OrderContext } from "../../../context/OrderContext"

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
    console.log('radio checked', e.target.value);
    // setValue(e.target.value);
  };
  
  // const [value, setValue] = useState(false);
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
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
              // ["shipped"]: false
            }}

        >
          <Row gutter={16}>

            <Col span={12}>
              <Form.Item
                name="_id"
                label="Id"
              >
                <Input disabled={true} defaultValue = {order._id} />
              </Form.Item>
            </Col>
          </Row>
            <Col span={24}>
            <Form.Item 
            label="Skickad?"
            name="shipped">
          <Radio.Group onChange={onChange} defaultValue={false}>
            <Radio value={true}> Ja </Radio>
            <Radio value={false}> Nej </Radio>
          </Radio.Group>
        </Form.Item>
            </Col> 
          <Button type="primary" htmlType="submit" onClick={onClose}>
              Spara
            </Button>
            <Button onClick={onClose}>Avbryt</Button>
        </Form>
      </Drawer>
    </>
  );
};

export default AdminEditOrderDrawer;