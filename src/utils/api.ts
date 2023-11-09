import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

const onResponse = (response: AxiosResponse) => {
	return response;
};

const onResponseError = (error: AxiosError | Error) => {
	if (error instanceof AxiosError) {
		// TODO: Handle refresh token when available

		if (error.response?.status === 401) {
			if (typeof window === 'undefined') {
				redirect('/api/handle-sign-out-cookie');
			} else {
				deleteCookie('token');
				redirect('/login');
			}
		}
	}

	return Promise.reject(error);
};

api.interceptors.response.use(onResponse, onResponseError);

api.interceptors.request.use(
	(config) => {
		// const token = getCookie('token');

		let token: string | undefined = '';

		if (typeof window === 'undefined') {
			const { cookies } = require('next/headers');

			token = cookies().get('token')?.value;
		} else {
			token = getCookie('token');
		}

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);
