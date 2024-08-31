import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import { videoFactory } from "../../utils/factories";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
const Wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <MemoryRouter>
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  </MemoryRouter>
);

const mockedData = videoFactory.buildList(8);

describe("CardList", () => {
  it("List renders", () => {
    render(
      <Wrapper>
        <CardList data={mockedData} isError={false} isLoading={false} />
      </Wrapper>
    );
    const list = screen.getAllByText(/Custom title/);
    expect(list[0]).toBeInTheDocument();
  });

  it("List is loading", () => {
    render(<CardList data={[]} isError={false} isLoading={true} />);
    expect(screen.getByTestId("loadingSkelets")).toBeInTheDocument();
  });

  it("List has server error", () => {
    render(<CardList data={[]} isError={true} isLoading={false} />);
    expect(screen.getByText("Server error")).toBeInTheDocument();
  });
});
