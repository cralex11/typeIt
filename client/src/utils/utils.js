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

//for routing
export const intersection = (arrays) =>
  arrays.reduce((a, b) => a.filter((c) => b.includes(c)));

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes) {
  const roles = /*JSON.parse(localStorage.getItem("roles"))*/ [2];
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection([permission, roles]).length;
  });
}

export const errNotify = (e) => notify(e.response.data.message, "warning");
