import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import SignUpCard from "@/features/auth/components/sign-up-card";

export default async function SignUp() {
  const user = await getCurrent();

  if (user) {
    redirect("/");
  }

  return <SignUpCard />;
}
