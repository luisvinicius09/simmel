import { GeistSans, GeistMono } from 'geist/font'
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={GeistSans.className + ' container z-10'}>
			<body className='bg-accent '>{children}</body>
		</html>
	);
}
