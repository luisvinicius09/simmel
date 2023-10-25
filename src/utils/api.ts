import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// TODO: intercept response and handle if user is unauthorized