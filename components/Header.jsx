/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);

	return (
		<div className='container mx-auto px-10 mb-8'>
			<div className='border-b w-full inline-block border-blue-400 py-8'>
				<div className='md:float-left block'>
					<Link href='/'>
						<span className='cursor-pointer font-bold text-3xl text-white mr-3'>
							Food Blog
						</span>
					</Link>
					<span className='cursor-pointer text-base text-white mr-2'>
						<Link href='/about'>About</Link>
					</span>
				</div>
				<div className='hidden md:float-left md:contents'>
					{categories.map((category, index) => (
						<Link key={index} href={`/category/${category.slug}`}>
							<span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
