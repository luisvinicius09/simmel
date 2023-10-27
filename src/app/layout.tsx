import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='container bg-accent z-10'>{children}</body>
		</html>
	);
}
