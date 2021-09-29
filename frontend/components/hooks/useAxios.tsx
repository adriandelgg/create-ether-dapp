import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

type RequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * Fetches data from the given URL & handles unmounting cancellation.
 * @param {string} method The request type.
 * @param {string} url The URL to fetch from
 * @param {object} headers The request headers
 * @returns The result, isLoading, and setIsLoading
 */
const useAxios = (
	method: RequestMethods,
	url: string,
	config: AxiosRequestConfig = {},
	dependencies: any[] = []
) => {
	const [isLoading, setIsLoading] = useState(true);
	const [result, setResult] = useState<any>(null);

	useEffect(() => {
		const source = axios.CancelToken.source();

		(async () => {
			try {
				const res = await axios({
					method,
					url,
					...config,
					cancelToken: source.token
				});

				setIsLoading(false);
				if (res.status === 200) setResult(res.data);
			} catch (e) {
				if (axios.isAxiosError(e)) {
					setIsLoading(false);
					console.error(e);
				} else console.log(e);
			}
		})();

		return () =>
			source.cancel(
				'API request was cancelled because the component unmounted.'
			);
	}, dependencies);

	return [result, isLoading, setIsLoading] as const;
};

export default useAxios;
