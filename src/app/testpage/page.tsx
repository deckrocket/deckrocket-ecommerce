'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TestPage() {
	const [test, setTest] = useState();

	useEffect(() => {
		fetch('api/')
			.then((res) => res.json())
			.then((data) => setTest(data));
	}, []);

	console.log(test);

	return (
		<>
			<h1>This is test page!</h1>
			<Link href="..">Back to main</Link>
		</>
	);
}
