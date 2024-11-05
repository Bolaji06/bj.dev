"use client";

import Button from "@/components/Button/Button"
import Label from "@/components/Label/Label"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import clsx from "clsx";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";

export default function AccountAuthPage(){
    const [formTab, setFormTab] = useState<string>("Login");

    function handleTab(tab: string) {
      setFormTab(tab);
    }

    return (
        <>
            <main className="py-14">
                <AdminHeaderTitle title="Login / Register Admin"/>
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
          <form action="" className="space-y-6">
            <div>
              <Label id="email">
                Email
                <Input name="email" />
              </Label>
            </div>
            <div>
              <Label id="password">
                Password
                <Input name="password"/>
              </Label>
            </div>
            <div>
              <Button type="submit">Login</Button>
            </div>
          </form>
        ) : (
          <form action="" className="space-y-6">
            <div>
              <Label id="email">
                Email
                <Input name="email" />
              </Label>
            </div>
            <div>
              <Label id="password">
                Password
                <Input name="password" />
              </Label>
            </div>
            <div>
              <Button type="submit">Register</Button>
            </div>
          </form>
        )}

            </main>
        </>
    )
}