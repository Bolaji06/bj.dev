"use client";

import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function UserForm() {
  return (
    <>
      <section>
        <AdminHeaderTitle title="About Me" />

        <form action="" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label id="fullName">
                Full Name
                <Input name="fullName" />
              </Label>
            </div>
            <div>
              <Label id="email">
                Email
                <Input name="email" />
              </Label>
            </div>
            <div>
              <Label id="photo">
                Photo URL
                <Input name="photo" />
              </Label>
            </div>
            <div className="">
              <Label id="socialLinks">
                Social Link
                <div className="w-full flex gap-2 items-center">
                  <Input name="socialLinks" />
                  <Button className="h-3" type="button">Add</Button>
                </div>
              </Label>
              <div>
                my links
              </div>
              
            </div>
          </div>
          <div>
            <Label id="bio">
              Bio.
              <Textarea name="bio" />
            </Label>
          </div>

          <div>
            <Button type="submit">Add Project</Button>
          </div>
        </form>
      </section>
    </>
  );
}
