import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyInit = () =>
  toast.configure({
    delay: 300,
    autoClose: 3000,
    pauseOnFocusLoss: false,
  });

export const notify = (msg, type = "info", title = null, config = {}) => {
  if (!title) toast[type](msg, config);
  else if (title)
    toast[type](
      <div>
        <p style={{ fontSize: "1.2rem", margin: "0" }}> {title} </p>
        <p style={{ margin: "0" }}>{msg}</p>
      </div>,
      config
    );
};
