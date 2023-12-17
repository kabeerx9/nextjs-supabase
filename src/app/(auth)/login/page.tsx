"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useState } from "react";

import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";

const Login = () => {
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = async (
		e: React.FormEvent,
		email: string,
		password: string,
	) => {
		e.preventDefault();
		console.log(email, password, "user login ");
		setError("");
		const supabase = createClientComponentClient();
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setError(error.message);
			return;
		}
		router.push("/");
	};

	return (
		<main className="flex flex-col gap-5 items-center justify-center h-screen">
			<h2 className="text-center text-3xl font-semibold">Login</h2>
			<AuthForm handleSubmit={handleSubmit} />
			{error && <p className="text-2xl font-bold text-red-500">{error}</p>}
		</main>
	);
};

export default Login;
