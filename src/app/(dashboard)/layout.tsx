import '@/globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return <body className='container bg-accent z-10'>{children}</body>;
}
