
import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserContext } from '../../../context/UserContext';

const LoginForm: React.FC = () => {
  const { email, password, setEmail, setPassword, login, logOut, auth, data } = useContext(UserContext)!;
  

  const handleLogout = async() => {
    
      await logOut()
      console.log('utloggad')
      
    
  }


  const handleSubmit = async () => {
    await auth()
    if (data === "You are not logged in") {
      await login()
      console.log('inloggad')
    }else{
      await logOut()
      console.log('utloggad')
    }
    // try {
    //   await login(); 
    //   await auth()
    //   console.log(data)
    // } catch (error) {
    //   console.log('Error:', error);
      
    //}
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
          <Button onClick={handleSubmit}type="primary" htmlType="submit">Logga
              {/* //====== här vill vi kolla om man är inloggad ====== */}
          
            {/* //{data ? 'logga in' : 'logga ut'} */}
          </Button>
          
        </Form.Item>
      </Form>
      <div>
        <h2>{data.firstName}</h2>
        <h2>{data.lastName}</h2>
      </div>
    </div>
  );
};

export default LoginForm;

      

