import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	if (data.session) {
		// we are  logged in , now we can't go to this route
		console.log("Already logged in , wtf do you want to do with auth routes");
		redirect("/");
	}

	return (
		<div>
			<nav className="flex justify-between w-full p-5 bg-gray-400">
				<p>Auth Page</p>
				<Link href="/login">Log In</Link>
				<Link href="/signup">Sign Up</Link>
			</nav>
			{children}
		</div>
	);
}
