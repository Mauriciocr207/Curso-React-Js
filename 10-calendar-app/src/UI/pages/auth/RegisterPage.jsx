import { useContext, useState } from "react";
import AuthLayout from "./AuthLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { registerValidation } from "../../validation";
import { useDispatch, useSelector } from "react-redux";
import NotyfContext from "../../context/NotyfContext";
import { startRegister } from "../../../app/features/auth";
import { Card } from "@nextui-org/react";

const loginFields = {
  name: "",
  email: "",
  pass: "",
  confirmPass: "",
};

export default function RegisterPage() {
  const [passIsVisible, setPassIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const {
    name,
    email,
    pass,
    confirmPass,
    onInputChange,
    errors,
    isFormValid,
    formState,
    onResetForm,
  } = useForm(loginFields, registerValidation);
  const { isLoading, errorMessage } = useSelector((state) => state.auth);
  const notyf = useContext(NotyfContext);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      notyf.error("Completa los campos correctamente para continuar");
      return;
    }

    dispatch(startRegister(formState));
    onResetForm();
  };

  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-700 md:text dark:text-white mb-5">
        Calendar App
      </h1>
      <div className="w-full bg-white rounded-xl shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h2>
          {errorMessage && (
            <Card data-testid="errorMessage" className="bg-danger text-white font-semibold px-5 py-2 text-center">
              {errorMessage}
            </Card>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <Input
              data-testid="name"
              variant="bordered"
              type="text"
              label="Your Name"
              placeholder="Enter your name"
              className="w-full shadow rounded-medium"
              name="name"
              value={name}
              onChange={onInputChange}
              isInvalid={!!errors.name}
              errorMessage={errors.name}
            />
            <Input
              data-testid="email"
              variant="bordered"
              type="email"
              label="Your Email"
              placeholder="Enter your email"
              className="w-full shadow rounded-medium"
              name="email"
              value={email}
              onChange={onInputChange}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
            />
            <Input
              data-testid="password"
              variant="bordered"
              label="Password"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setPassIsVisible(!passIsVisible)}
                  aria-label="toggle password visibility"
                >
                  {passIsVisible ? (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={passIsVisible ? "text" : "password"}
              className="w-full shadow rounded-medium"
              name="pass"
              value={pass}
              onChange={onInputChange}
              isInvalid={!!errors.pass}
              errorMessage={errors.pass}
            />
            <Input
              data-testid="confirmPassword"
              variant="bordered"
              label="Confirm Password"
              placeholder="Confirm your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setConfirmIsVisible(!confirmIsVisible)}
                  aria-label="toggle password visibility"
                >
                  {confirmIsVisible ? (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={confirmIsVisible ? "text" : "password"}
              className="w-full shadow rounded-medium"
              name="confirmPass"
              value={confirmPass}
              onChange={onInputChange}
              isInvalid={!!errors.confirmPass}
              errorMessage={errors.confirmPass}
            />
            <Button
              data-testid="register-button"
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {isLoading ? (
                <Spinner size="sm" color="white" />
              ) : (
                "Create account"
              )}
            </Button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Have an account?{" "}
              <Link
                to="/auth/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
