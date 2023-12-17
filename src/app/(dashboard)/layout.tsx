import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	if (!data.session) {
		// we are not logged in
		console.log("Not logged in , route protected BOIII");
		redirect("/login");
	}

	return (
		<div>
			<Navbar user={data?.session?.user} />
			{children}
		</div>
	);
}
