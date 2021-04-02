import { useContext, useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm";
import { useHttp } from "../hooks/http.hook";
import { errNotify, notify } from "../utils/utils";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/appApi";

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (error) {
      notify(error.message || error, "error", "Error");
      clearError();
    }
  }, [error, clearError]);
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = async (type) => {
    try {
      console.log(type);
      // let pass = false;
      let res;
      if (type === "login")
        res = await api.auth.login(form).catch((e) => errNotify(e));
      if (type === "register")
        res = await api.auth.register(form).catch((e) => errNotify(e));
      if (res.message) notify(res.message);
      if (res.data) auth.login(res.data.token, res.data.userId);
    } catch (e) {
      console.log(e.message);
    }
  };

  const checkboxHandle = (e) => {
    const { target } = e;
    console.log(target.value);
  };

  return (
    <LoginForm
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      loading={loading}
      checkboxHandle={checkboxHandle}
      setIsChecked={setIsChecked}
    />
  );
};

export default AuthPage;
