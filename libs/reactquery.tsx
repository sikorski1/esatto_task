"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 360 * 1000,
						refetchInterval: 360 * 1000,
					},
				},
			})
	);
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
