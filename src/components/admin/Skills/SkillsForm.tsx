import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";

export default function SkillsForm() {
  return (
    <>
      <section>
        <AdminHeaderTitle title="Add your skills" />

        <form action="">
          <div>
            <Label id="skill">
              Skill
              <Input name="skill" />
            </Label>
          </div>
          <div className="mt-4">
            <Button type="submit">Add your skill</Button>
          </div>
        </form>
      </section>
    </>
  );
}
