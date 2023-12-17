"use client";
import AuthForm from "@/components/AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
	const router = useRouter();

	const [error, setError] = useState("");
	const handleSubmit = async (
		e: React.FormEvent,
		email: string,
		password: string,
	) => {
		e.preventDefault();
		console.log(email, password, "user signup");
		const supabase = createClientComponentClient();

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/api/auth/callback`,
			},
		});
		if (error) {
			setError(error.message);
			return;
		}
		router.push("/verify");
	};
	return (
		<main className="flex flex-col gap-5 items-center justify-center h-screen">
			<h2 className="text-center text-3xl font-semibold">Sign Up</h2>
			<AuthForm handleSubmit={handleSubmit} />
			{error && <p className="text-red-500">{error}</p>}
		</main>
	);
};

export default Signup;
