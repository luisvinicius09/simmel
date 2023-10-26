import { deleteCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
	deleteCookie('token');

	return redirect('/login');
}
