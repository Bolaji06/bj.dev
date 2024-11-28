"use client";

import { updateUser } from "@/actions/admin/userAction";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import FormButtonClient from "@/components/ui/formButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IUser } from "@/definition/definition";
import { X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

export default function UserForm({ user }: { user: IUser }) {
  const userLinks = user?.links?.length ? user?.links[0].split(",") : [];

  const [socialLinkList, setSocialLinkList] = useState<string[]>(userLinks);
  const [socialLinksInput, setSocialLinksInput] = useState<string>("");

  const bindUpdateUser = updateUser.bind(null, user.id?.toString() as string);

  function onChangeSocialLinks(e: ChangeEvent<HTMLInputElement>) {
    setSocialLinksInput(e.target.value);
  }

  function addSocialLink(item: string) {
    if (socialLinksInput) {
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
    setSocialLinksInput("");
  }

  function removeSocialLink(item: string) {
    setSocialLinkList((curState) => {
      return curState.filter((link) => item !== link);
    });
  }

  return (
    <>
      <section data-testid="user-form-container">
        <AdminHeaderTitle title="About Me" />

        <form
          action={bindUpdateUser}
          className="space-y-4"
          data-testid="user-form"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            data-testid="inputs-container-grid"
          >
            <div>
              <Label id="fullName">
                Full Name
                <Input
                  name="name"
                  defaultValue={user?.name}
                  data-testid="input-fullname"
                />
              </Label>
            </div>

            <div>
              <Label id="photo">
                Photo URL
                <Input
                  name="photo"
                  defaultValue={user?.photo}
                  data-testid="input-photourl"
                />
              </Label>
            </div>

            <div className="">
              <Label id="socialLinks">
                Social Link
                <div className="w-full flex gap-2 items-center">
                  <Input
                    name="link"
                    value={socialLinksInput}
                    onChange={onChangeSocialLinks}
                    data-testid="input-socialLink"
                  />
                  <Button
                    onClick={() => addSocialLink(socialLinksInput)}
                    className="h-3 text-white"
                    type="button"
                    name="social-btn"
                    role="button"
                  >
                    Add
                  </Button>
                </div>
              </Label>
              <div className="inline-flex mt-2 gap-1 items-center flex-wrap mt-1">
                {socialLinkList.length !== 0 &&
                  socialLinkList.map((link) => (
                    <p
                      key={link}
                      className="flex text-mute_foreground items-center gap-1 bg-gray-200 text-xs p-1 rounded-sm"
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
                  name="links"
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
            <FormButtonClient title="Update Profile" />
          </div>
        </form>
      </section>
    </>
  );
}
