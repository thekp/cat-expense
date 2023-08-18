import React from 'react';

type Props = {
	children?: JSX.Element | JSX.Element[];
};

export const PageContainer = ({ children }: Props) => <div className="flex min-h-screen flex-col items-center justify-center">{children}</div>;
