import Routes from "./router";
import { useEffect, useState } from "react";
import { notify, notifyInit } from "./utils/utils";
import { useDispatch } from "react-redux";
import { checkToken } from "./store/actions/userAction";
import Spinner from "./Components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    notifyInit();

    dispatch(checkToken())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        notify("Session has been expired!", "warning");
      });
  }, []);

  return (
    <div className="app bg-gray-700 text-gray-100">
      {loading ? <Spinner /> : <Routes />}
    </div>
  );
};

export default App;
