
import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserContext } from '../../../context/UserContext';

const LoginForm: React.FC = () => {
  const { email, password, setEmail, setPassword, login } = useContext(UserContext)!;


  const handleSubmit = async (values: any) => {
    try {
      await login();   
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <Form 
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="on"
      >
        <Form.Item
          label="Username"
          name="username"
          initialValue={email}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          initialValue={password}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={handleSubmit}type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;

      

