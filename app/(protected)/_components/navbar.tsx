"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathName = usePathname();
  debugger;
  return (
    <nav className="bg-secondary flex justify-between items-center p-1 w-full rounded-xl shadow-sm">
      <div className="flex gap-x-2">
        <Button
          className="h-8"
          asChild
          variant={pathName === "/admin" ? "default" : "outline"}
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          className="h-8"
          asChild
          variant={pathName === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
