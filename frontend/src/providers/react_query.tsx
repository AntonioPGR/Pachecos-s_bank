// REACT QUERY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const new_query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export const ReactQueryProvider = ({ children }: IProvider) => {
  return (
    <QueryClientProvider client={new_query_client}>
      {children}
    </QueryClientProvider>
  );
};
