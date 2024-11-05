import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";


export default function StackForm(){

    return (
        <>
           <section>
        <AdminHeaderTitle title="Add your stacks" />

        <form action="">
          <div>
            <Label id="stack">
              Stack
              <Input name="stack" />
            </Label>
          </div>
          <div className="mt-4">
            <Button type="submit">Add stack</Button>
          </div>
        </form>
      </section>
        </>
    )
}