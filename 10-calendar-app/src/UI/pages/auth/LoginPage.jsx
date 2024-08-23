import { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Input } from "@nextui-org/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import {Spinner} from "@nextui-org/spinner";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
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
          <form className="space-y-4 md:space-y-6" >
            <Input
              variant="bordered"
              type="email"
              label="Your Email"
              placeholder="Enter your email"
              className="w-full shadow rounded-medium"
            />
            <Input
              variant="bordered"
              label="Password"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEye  className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-full shadow rounded-medium"
            />
            <Button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
              {/* <Spinner size="sm"/> */}
            </Button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/auth/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
