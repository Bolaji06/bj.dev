import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectForm() {
  return (
    <>
      <section>
        <AdminHeaderTitle title="Add new Project" />

        <form action="" className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label id="title">
                Project title
                <Input name="title" />
              </Label>
            </div>

            <div>
              <Label id="description">
                Description
                <Input name="description" />
              </Label>
            </div>
            
            <div>
              <Label id="projectUrl">
                Project URL
                <Input name="projectUrl" />
              </Label>
            </div>
            <div>
              <Label id="thumbnail">
                Thumbnail
                <Input name="thumbnail" />
              </Label>
            </div>
            <div>
              <Label id="githubUrl">
               Github URL
                <Input name="githubUrl" />
              </Label>
            </div>
            <div>
              <Label id="stacks">
                Stack used
                <Input name="stacks" />
              </Label>
            </div>
          </div>
          <div className="w-full">
              <Label id="about">
                About project
                <Textarea name="about" className="w-full"/>
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
