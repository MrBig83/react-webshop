
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

//const handleEmailChange =

const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const LoginForm = () => {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  
  const handleSubmit = async(e) => {
    e.preventDefault()

      try {

        const res = await fetch("/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({email: email, password: password } )
        })
        const data = await res.json()
        console.log(data)
      
        
      }catch (err) {
        console.log(err)
      }
    }
      
      
      return (
        <div>
  <Form onSubmit={handleSubmit}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off">
    <Form.Item
      label="Username"
      name="username"
      onChange={(e) => setEmail(e.target.value)}
     //onChange={(e) => console.log(e.target.value)}
      rules={[{ required: true, message: 'Please input your username!' }]}>
      <Input />
        
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      onChange={(e) => setPassword(e.target.value)}
      //onChange={(e) => console.log(e.target.value)}
      rules={[{ required: true, message: 'Please input your password!' }]} >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button onClick={handleSubmit} type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
  </Form>

      </div>
    )
  }
export default LoginForm