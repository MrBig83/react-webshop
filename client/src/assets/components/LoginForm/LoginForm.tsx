
import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserContext } from '../../../context/UserContext';

const LoginForm: React.FC = () => {
  const { email, password, setEmail, setPassword, login, logOut, auth, data } = useContext(UserContext)!;

  const handleSubmit = async () => {
    await auth()
    if (!data._id) {
      await login()

    }else{
      await logOut()
    }
  };
  
  return (
    <div>
      {data.firstName ? (
        <div style={{display: 'none'}}>Hidden element</div>
      ) : (
        
        <Form 
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="on"
        >
        <Form.Item
          label="E-postadress"
          name="username"
          initialValue={email}
          rules={[{ required: true, message: 'Var god fyll i din e-postadress' }]}
          >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Lösenord"
          name="password"
          initialValue={password}
          rules={[{ required: true, message: 'Var god fyll i ditt lösenord' }]}
          >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        </Form.Item>
      </Form>
        )}
          <Button onClick={handleSubmit}type="primary" htmlType="submit">
            {data._id ? 'logga ut' : 'logga in'}
          </Button>
      <div>
      </div>
    </div>
  );
};

export default LoginForm;

      

