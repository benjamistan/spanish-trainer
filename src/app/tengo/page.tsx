'use client';

import { useState } from 'react';
import words from '../../data/tengo.json';

export default function TengoCycler() {
	const [currentWord, setCurrentWord] = useState<{
		number: number;
		spanish: string;
		english: string;
	} | null>(null);
	const [revealSpanish, setRevealSpanish] = useState(false);
	const [wordCount, setWordCount] = useState(0);

	const pickRandomWord = () => {
		const randomIndex = Math.floor(Math.random() * words.length);
		setCurrentWord(words[randomIndex]);
		setRevealSpanish(false);
		setWordCount((prevCount) => prevCount + 1);
	};

	const handleButtonClick = () => {
		if (revealSpanish) {
			pickRandomWord();
		} else {
			setRevealSpanish(true);
		}
	};

	return (
		<div className='flex flex-col items-center justify-start gap-4 mt-20 text-center'>
			<div className='text-lg text-gray-700 mb-20'>Words Seen: {wordCount}</div>
			{currentWord ? (
				<>
					<div className='grid grid-cols-2 gap-8 border-black'>
						<div className='text-3xl text-gray-500 w-48'>
							{currentWord.english}
						</div>
						<div className='text-3xl w-48 '>
							{revealSpanish ? currentWord.spanish : ''}
						</div>
					</div>
				</>
			) : (
				<div className='text-xl'>Click the button to start!</div>
			)}
			<button
				onClick={handleButtonClick}
				className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
			>
				{revealSpanish ? 'Next Word' : 'Reveal'}
			</button>
		</div>
	);
}
