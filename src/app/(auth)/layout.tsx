"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";

  return (
    <main className="bg-[url(/bg.jpg)] bg-cover min-h-screen">
      <div className="max-w-screen-2xl mx-auto p-4">
        <nav className="flex items-center justify-between">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={150}
            height={55}
          />
          <Button
            asChild
            variant={"primary"}
          >
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
