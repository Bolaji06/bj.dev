"use client";

import { userAction } from "@/actions/admin/userAction";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import FormButton from "@/components/FormButton/FormButton";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IUser } from "@/definition/definition";
import { X } from "lucide-react";
import { ChangeEvent, useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function UserForm({ user }: { user: IUser }) {
  const userLinks = user?.links?.length ? user?.links[0].split(",") : [];

  const [socialLinkList, setSocialLinkList] = useState<string[]>(userLinks);
  const [socialLinksInput, setSocialLinksInput] = useState<string>("");

  const [state, action, isPending] = useActionState(userAction, {});
  const hasMount = useRef(false);

  function onChangeSocialLinks(e: ChangeEvent<HTMLInputElement>) {
    setSocialLinksInput(e.target.value);
  }

  function addSocialLink(item: string) {
    setSocialLinkList((prevState) => {
      if (!prevState.includes(item)) {
        return [...prevState, item];
      }
      return [...prevState];
    });

    if (socialLinkList.includes(item)) {
      toast(`${item} already in the list!`);
    }
  }

  function removeSocialLink(item: string) {
    setSocialLinkList((curState) => {
      return curState.filter((link) => item !== link);
    });
  }

  useEffect(() => {
    if (hasMount.current){
      if(state.success){
        toast.success(
          <div className="capitalize font-medium">{state.message}</div>,
          { duration: 4000 }
        );
      }else if(state.success === false){
        toast.error(
          <div className="capitalize font-medium">{state.message}</div>,
          { duration: 4000 }
        );
      }
    }else {
      hasMount.current = false;
    }
  }, [state]);

  return (
    <>
      <section>
        <AdminHeaderTitle title="About Me" />

        <form action={action} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label id="fullName">
                Full Name
                <Input name="fullName" defaultValue={user?.name} />
              </Label>
            </div>

            <div>
              <Label id="photo">
                Photo URL
                <Input name="photo" defaultValue={user?.photo} />
              </Label>
            </div>

            <div className="">
              <Label id="socialLinks">
                Social Link
                <div className="w-full flex gap-2 items-center">
                  <Input
                    name="socialLinks"
                    value={socialLinksInput}
                    onChange={onChangeSocialLinks}
                  />
                  <Button
                    onClick={() => addSocialLink(socialLinksInput)}
                    className="h-3"
                    type="button"
                  >
                    Add
                  </Button>
                </div>
              </Label>
              <div className="inline-flex gap-1 items-center flex-wrap mt-1">
                {socialLinkList.map((link) => (
                  <p
                    key={link}
                    className="flex items-center gap-1 bg-gray-600 text-xs p-1 rounded-sm"
                  >
                    {link}
                    <span onClick={() => removeSocialLink(link)}>
                      <X size={10} className="cursor-pointer" />
                    </span>
                  </p>
                ))}
              </div>
              <div>
                <input
                  name="socials"
                  readOnly
                  value={socialLinkList}
                  type="hidden"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <div>
            <Label id="bio">
              Bio.
              <Textarea name="bio" defaultValue={user?.bio} />
            </Label>
          </div>

          <div>
            <FormButton isPending={isPending}>Submit</FormButton>
          </div>
        </form>
      </section>
    </>
  );
}
