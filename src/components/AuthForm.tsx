'use client ';
import { useEffect, useState } from 'react';

const AuthForm = ({
	handleSubmit,
}: {
	handleSubmit: (
		e: React.FormEvent<HTMLFormElement>,
		email: string,
		password: string
	) => void;
}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form
			className=" p-5 shadow-lg rounded-lg bg-pink-100 flex flex-col justify-center items-center w-1/3 space-y-10"
			onSubmit={(e) => handleSubmit(e, email, password)}>
			<label className="flex flex-col justify-center items-center">
				<span className="text-xl">Email:</span>
				<input
					className="p-2 rounded-lg"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<label className="flex flex-col justify-center items-center">
				<span className="text-xl">Password:</span>
				<input
					className="p-2 rounded-lg"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			<button className="p-2 rounded-lg bg-black text-white font-semibold">
				Submit
			</button>
		</form>
	);
};

export default AuthForm;
