import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: NextPage = () => {
	return (
		<footer className="mt-20 flex flex-col h-24 w-full items-center justify-center border-t fk">
			<Link className="flex items-center justify-center gap-2" href="https://thekp.dev/" target="_blank" rel="noopener noreferrer">
				Created by Khoa Phan <Image src="/khoa.png" alt="Close up of Khoa's face" width={20} height={20} />
			</Link>
		</footer>
	);
};
