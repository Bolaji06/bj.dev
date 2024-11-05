import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ExperienceForm() {
  return (
    <>
      <section>
        <AdminHeaderTitle title="Fill out your experience" />

        <form action="" className="space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Label id="company">
                Company
                <Input name="company" />
              </Label>
            </div>
            <div>
              <Label id="role">
                Role
                <Input name="role" />
              </Label>
            </div>
            <div>
              <Label id="startDate">
                Start date
                <Input name="startDate" />
              </Label>
            </div>
            <div>
              <Label id="endDate">
                End date
                <Input name="endDate" />
              </Label>
            </div>
          </div>
          <div>
            <Label id="description">
              Description
              <Textarea name="description" />
            </Label>
          </div>
          <div className="mt-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </section>
    </>
  );
}
