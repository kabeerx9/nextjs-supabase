"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const DeleteButton = () => {
	const router = useRouter();

	const handleLogout = async () => {
		const supabase = createClientComponentClient();
		const { error } = await supabase.auth.signOut();

		if (!error) {
			router.push("/login");
		}
	};

	return (
		<button
			type="button"
			className="p-2 bg-black text-white rounded-lg"
			onClick={handleLogout}
		>
			Log Out
		</button>
	);
};

export default DeleteButton;
