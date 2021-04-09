import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import { Redirect } from "react-router-dom";
import { userLogin, userRegister } from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const isAuth = useSelector((store) => store.user.isAuthorized);
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = async (type) => {
    setDisable(true);
    try {
      if (type === "login") dispatch(userLogin(form));
      else if (type === "register") dispatch(userRegister(form));
      setDisable(false);
    } catch (e) {
      console.log(e.message);
      setDisable(false);
    }
  };

  const checkboxHandle = (e) => {
    const { target } = e;
    console.log(target.value);
  };

  return isAuth ? (
    <Redirect to="/app" />
  ) : (
    <LoginForm
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      checkboxHandle={checkboxHandle}
      setIsChecked={setIsChecked}
    />
  );
};

export default AuthPage;
