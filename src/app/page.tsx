'use client';

import Link from 'next/link';

export default function TableOfContents() {
	return (
		<div className='flex flex-col items-center justify-center gap-8 mt-40 text-center'>
			<h1 className='text-4xl font-bold'>Table of Contents</h1>
			<ul className='text-lg list-disc'>
				<li>
					<Link href='/1000words' className='text-blue-500 hover:underline'>
						Practice 1000 Spanish Words
					</Link>
				</li>
				{/* Add more links to other sections here if needed */}
			</ul>
		</div>
	);
}
