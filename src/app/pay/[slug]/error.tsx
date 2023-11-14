'use client';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest: string };
	reset: () => void;
}) {
	return (
		<div>
			<h1>Checkout não existe ou algum erro ocorreu</h1>
		</div>
	);
}
