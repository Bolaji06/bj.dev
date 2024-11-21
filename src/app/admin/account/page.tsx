"use client";

import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import clsx from "clsx";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import {
  adminLoginAction,
  adminRegisterAction,
} from "@/actions/adminAuthActions";
import FormButton from "@/components/FormButton/FormButton";
import InputError from "@/components/InputError/InputError";
import { adminAuthSchemaType } from "@/definition/validation";
import { useRouter } from "next/navigation";

export default function AccountAuthPage() {
  const [formTab, setFormTab] = useState<string>("Login");
  const [loginInput, setLoginInput] = useState<adminAuthSchemaType>({
    email: "",
    password: "",
  });
  const [registerInput, setRegisterInput] = useState<adminAuthSchemaType>({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const router = useRouter();

  function onChangeLogin(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function onChangeRegister(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRegisterInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const [loginState, loginFormAction, isLogin] = useActionState(
    adminLoginAction,
    null
  );

  const [registerState, registerFormAction, isRegister] = useActionState(
    adminRegisterAction,
    null
  );

  console.log(loginState)

  function handleTab(tab: string) {
    setFormTab(tab);
  }

  useEffect(() => {
    if (!loginState?.success) {
      setLoginError(loginState?.message);
    }
  }, [loginState?.success]);

  useEffect(() => {
    if (!registerState?.success) {
      setRegisterError(registerState?.message);
    }
    router.push("/admin/dashboard");
  }, [!registerState?.success]);

  return (
    <>
      <main className="py-14">
        <AdminHeaderTitle title="Login / Register Admin" />
        <nav className="flex items-center gap-10 my-4">
          <Button
            onClick={() => handleTab("Login")}
            className={`bg-opacity-5 transition-opacity ease-in-out duration-700 ${clsx(
              { "bg-primary-brand bg-opacity-80": formTab === "Login" }
            )}`}
          >
            Login
          </Button>
          <Button
            onClick={() => handleTab("Register")}
            className={`bg-opacity-5 transition-opacity ease-in-out duration-700 ${clsx(
              { "bg-primary-brand bg-opacity-80": formTab === "Register" }
            )}`}
          >
            Register
          </Button>
        </nav>

        {formTab === "Login" ? (
          <form action={loginFormAction} className="space-y-6">
            <div>
              <Label id="email">
                Email
                <Input
                  name="email"
                  type="email"
                  value={loginInput.email}
                  onChange={onChangeLogin}
                />
              </Label>
              {loginState && (
                <InputError
                  message={loginState?.message}
                  path={loginState?.path}
                  name="email"
                />
              )}
            </div>
            <div>
              <Label id="password">
                Password
                <Input
                  name="password"
                  type="password"
                  value={loginInput.password}
                  onChange={onChangeLogin}
                />
              </Label>
              {loginState && (
                <InputError
                  message={loginState?.message}
                  path={loginState?.path}
                  name="password"
                />
              )}
            </div>
            <FormButton isPending={isLogin}>
              {isLogin ? "Login..." : "Login"}
            </FormButton>
            {loginError && (
              <p className="first-letter:uppercase text-sm text-red-500">
                {loginError}
              </p>
            )}
          </form>
        ) : (
          <form action={registerFormAction} className="space-y-6">
            <div>
              <Label id="email">
                Email
                <Input
                  name="email"
                  value={registerInput.email}
                  onChange={onChangeRegister}
                />
              </Label>
            </div>
            <div>
              <Label id="password">
                Password
                <Input
                  name="password"
                  value={registerInput.password}
                  onChange={onChangeRegister}
                />
              </Label>
            </div>
            <FormButton isPending={isRegister}>
              {isRegister ? "Please wait..." : "Register"}
            </FormButton>
            {registerError && (
              <p className="first-letter:uppercase text-sm text-red-500">
                {registerError}
              </p>
            )}
          </form>
        )}
      </main>
    </>
  );
}
