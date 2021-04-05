import Routes from "./router";
import { useEffect } from "react";
import { notifyInit } from "./utils/utils";

const App = () => {
  useEffect(() => {
    notifyInit();
  }, []);

  return <Routes />;
};

export default App;
