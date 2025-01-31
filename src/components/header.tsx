import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";

export default function Header() {
  return (
    <nav className="mx-auto px-2 py-3 flex justify-between items-center shadow-md border-b-2">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo.png"
          alt="MeetSync logo"
          width={"150"}
          height={"60"}
          className="h-20 w-auto ml-5"
          priority={true}
        />
      </Link>

      <div className="flex items-center gap-5">
        <Link href={"/events?create=true"}>
          <Button className="flex items-center gap-2">
            <PenBox size={18} />
            Create Events
          </Button>
        </Link>
        <SignedOut>
          {/* <SignInButton forceRedirectUrl="/dashboard"> */}
          <SignInButton>
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
}
