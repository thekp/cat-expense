import React from 'react';

type Props = {
	children?: JSX.Element | JSX.Element[];
};

export const MainContainer = ({ children }: Props) => (
	<main className="grid gap-4 w-full flex-1 flex-col items-center justify-center px-4 py-2 text-center">{children}</main>
);
