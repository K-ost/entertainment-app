import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const client = new QueryClient();
export const Wrap = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <MemoryRouter>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
};
