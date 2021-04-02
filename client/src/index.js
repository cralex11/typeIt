import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.css";
import "./index.css";

console.log(process.env.REACT_APP_API_URL);
ReactDOM.render(<App />, document.querySelector("#root"));
