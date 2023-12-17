'use client';
import AuthForm from '@/components/AuthForm';
import React from 'react';

const Login = () => {
	const handleSubmit = async (
		e: React.FormEvent,
		email: string,
		password: string
	) => {
		e.preventDefault();
		console.log(email, password, 'user login ');
	};

	return (
		<main className="flex flex-col gap-5 items-center justify-center h-screen">
			<h2 className="text-center text-3xl font-semibold">Login</h2>
			<AuthForm handleSubmit={handleSubmit} />
		</main>
	);
};

export default Login;
