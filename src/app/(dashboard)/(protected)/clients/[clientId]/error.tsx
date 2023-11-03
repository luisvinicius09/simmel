import Link from 'next/link';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div>
			<h2>Client do not exist or Something went wrong!</h2>

			<Link href='/clients'>Go to Clients</Link>
		</div>
	);
}
