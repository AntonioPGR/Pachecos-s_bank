// REACT QUERY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const new_query_client = new QueryClient();

export const ReactQueryProvider = ({ children }: IProvider) => {
  return (
    <QueryClientProvider client={new_query_client}>
      {children}
    </QueryClientProvider>
  );
};
