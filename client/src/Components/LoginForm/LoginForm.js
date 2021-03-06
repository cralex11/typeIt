import { useEffect, useState } from "react";
import Button from "../Button";

const LoginForm = ({
  changeHandler,
  submitHandler,
  setIsChecked,
  loading = false,
}) => {
  const [localLoading, setLocalLoading] = useState(loading);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const submit = (e, type) => {
    setLocalLoading(true);
    e.preventDefault();
    submitHandler(type);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLocalLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [localLoading]);

  useEffect(() => {
    setLocalLoading(loading);
  }, [loading]);
  useEffect(() => {
    setIsChecked(checkboxValue);
  }, [checkboxValue, setIsChecked]);

  const checkboxHandle = () => {
    setCheckboxValue(!checkboxValue);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={changeHandler}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={changeHandler}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                onChange={checkboxHandle}
                checked={checkboxValue}
                value={checkboxValue}
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              title="Register"
              disabled={localLoading}
              onClick={(e) => submit(e, "register")}
              type="submit"
              className="group relative w-6/12 flex justify-center mr-1 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
            <Button
              title="Sign In"
              disabled={localLoading}
              onClick={(e) => submit(e, "login")}
              type="submit"
              className="group w-6/12 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
