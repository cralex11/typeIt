import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import { useHttp } from '../hooks/http.hook';

const AuthPage = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log('Data', data);
    } catch (e) {}
  };

  return <LoginForm changeHandler={changeHandler} registerHandler={registerHandler} loading={loading} />;
};

export default AuthPage;
