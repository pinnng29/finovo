import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <Button>Click</Button>
      <Button variant={"primary"}>Click</Button>
      <Button variant={"destructive"}>Click</Button>
      <Button variant={"outline"}>Click</Button>
      <Button variant={"secondary"}>Click</Button>
      <Button variant={"ghost"}>Click</Button>
      <Input />
    </div>
  );
}
