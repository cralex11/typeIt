import React, {useContext, useEffect, useState} from 'react';
import LoginForm from '../Components/LoginForm';
import {useHttp} from '../hooks/http.hook';
import {notify, notifyInit} from "../utils/utils";
import {AuthContext} from "../context/AuthContext";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    useEffect(() => {
        if (error) {
            notify(error.message || error, 'error', "Error")
            clearError();
        }
    }, [error, clearError, notify])
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };
    const submitHandler = async (type) => {
        try {
            const data = await request(`/api/auth/${type}`, 'POST', {...form});
            if (type === "login")
                auth.login(data.token, data.userId);
            notify(data.message);
        } catch (e) {
        }
    };


    return <LoginForm changeHandler={changeHandler} submitHandler={submitHandler} loading={loading} />;
};

export default AuthPage;
