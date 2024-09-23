import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { toast } from 'react-toastify';

const Register = () => {
  const { register } = useContext(AuthContext);

  const handleRegister = async (credentials) => {
    try {
      await register(credentials.username, credentials.email, credentials.password);
      toast.success('Registration successful!');
    } catch (err) {
      toast.error('Error registering user');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} type="register" />
    </div>
  );
};

export default Register;
