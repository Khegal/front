import { useEffect, useRef } from "react";
import Cookies, { CookieSetOptions } from "universal-cookie";

type Prop = {
	name: string;
	value?: string;
	option?: CookieSetOptions;
};

export function UseCookie({ name, value, option }: Prop) {
	const Cookie = useRef(new Cookies());
	const setItem = useRef((val: string, opt?: CookieSetOptions) => {
		Cookie.current.set(name, val, {
			path: "/",
			maxAge: 23 * 3600,
			...opt,
		});
	});
	const getItem = useRef(() => {
		return Cookie.current.get(name);
	});
	const removeItem = useRef(() => {
		return Cookie.current.remove(name);
	});

	useEffect(() => {
		if (value) setItem.current(value, option);
	}, [value, option]);

	return [getItem.current, setItem.current, removeItem.current];
}
