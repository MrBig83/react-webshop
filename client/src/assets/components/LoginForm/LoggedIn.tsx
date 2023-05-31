
import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const LoginForm: React.FC = () => {
  const { login } = useContext(UserContext)!;


  const handleSubmit = async () => {
    try {
      await login();  
    } catch (error) {
      console.log('Error:', error);
    }
};

return (
    <button onClick={handleSubmit}>Data</button>
    )
};

export default LoginForm;

      

