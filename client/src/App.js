import Routes from "./router";
import { useEffect, useState } from "react";
import { notifyInit } from "./utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "./store/actions/userAction";
import Spinner from "./Components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.user.isAuthorized);

  useEffect(() => {
    dispatch(checkToken());
    notifyInit();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [isAuth]);

  return <>{loading ? <Spinner /> : <Routes />}</>;
};

export default App;
