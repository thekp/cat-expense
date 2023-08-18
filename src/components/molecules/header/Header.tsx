import React from 'react';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="flex min-w-full px-4 py-4 justify-between bg-white border-b fk">
			<Link href="/" className="grid grid-col-1 grid-flow-col gap-2 items-center">
				<p className="">Cat Expense</p>
			</Link>
		</header>
	);
};
