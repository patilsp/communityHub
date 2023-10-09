import Link from "next/link";
import React from "react";
import Image from 'next/image'
import { getAuthSession } from "@/lib/auth";
import UserAccount from "./UserAccount";

const Navbar = async () => {
	const session = await getAuthSession();
	return (
		<div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-zinc-300 z-[10] py-2">
			<div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
				{/* logo */}
				<Link href={"/"} className="flex gap-2 items-center">
					<Image 
						src="/images/logo.png"
						alt="logo"
						width={50}
						height={50}
						className="mx-auto h-8 w-8"

						/>
					<p className="hidden text-zinc-700 text-sm font-medium md:block">
						CommunityHub
					</p>
				</Link>

				{/* search bar */}
				<div>Search bar</div>

				{/* Auth */}
				{session?.user ? (
					<UserAccount user={session.user} />
				) : (
					<Link href={"/sign-in"} className="w-[100px]">
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
