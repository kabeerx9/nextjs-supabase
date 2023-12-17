import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import Navbar from '@/components/Navbar';

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	return (
		<div>
			<Navbar user={data?.session?.user} />
			{children}
		</div>
	);
}
