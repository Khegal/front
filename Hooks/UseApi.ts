import { useToast } from "@chakra-ui/toast";
import { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useUser } from "../Context/UserContext";

type Prop = {
	service: Function;
	config?: AxiosRequestConfig;
	param?: string;
};

type ConfigProp = {
	myConfig?: AxiosRequestConfig;
	token: string | undefined;
};

type ErrorToastProp = {
	err: any;
	toast: Function;
};

const build_config = ({ myConfig, token }: ConfigProp) => {
	return {
		...myConfig,
		headers: {
			...myConfig?.headers,
			Authorization: `Bearer ${token}`,
		},
	};
};

const error_taost = ({ toast, err }: ErrorToastProp) => {
	toast({
		title: err?.response?.data?.error || "Алдаа гарлаа",
		description:
			err?.response?.data?.message ||
			"Одоогоор таны хүсэлтыг биелүүлэх боломжгүй байна.",
		status: "error",
		duration: 1000,
		isClosable: true,
	});
};

export function UseApi({ service, config: myConfig, param }: Prop) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const toast = useToast();
	const router = useRouter();
	const { get_access_token } = useUser();

	const fetch = useRef(async (body: any) => {
		try {
			setLoading(true);
			setError(null);
			setData(null);
			const token = get_access_token();
			const config = build_config({ myConfig, token });
			const res = await service({ config, body, param });
			setData(res);
			setLoading(false);
		} catch (err: any) {
			if (err?.response?.status === 401) {
				router.push("/login");
				error_taost({ toast, err });
				return;
			}
			setError(err);
			error_taost({ toast, err });
			setLoading(false);
		}
	});

	return [{ data, isLoading, error }, fetch.current] as const;
}
