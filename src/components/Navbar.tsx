import { User } from "@supabase/supabase-js";
import React from "react";
import DeleteButton from "./DeleteButton";

const Navbar = ({ user }: { user?: User }) => {
	return (
		<nav className="flex justify-between w-full p-5 bg-gray-400">
			<p>Dashboard</p>
			{user && <p className="font-semibold">Hello , {user.email}</p>}
			<DeleteButton />
		</nav>
	);
};

export default Navbar;
