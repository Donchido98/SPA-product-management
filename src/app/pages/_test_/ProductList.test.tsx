import { render, screen, waitFor } from "@testing-library/react";
import { ProductList } from "@/app/pages/ProductList";
import { AuthProvider } from "@/providers/AuthProvider";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

jest.mock("@/components/Protected", () => {
  return {
    Protected: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock("@/hooks/useProduct", () => ({
  useProducts: jest.fn(() => []),
  addProduct: jest.fn(),
  getCategories: jest.fn(() => ["Electronics", "Clothing", "Home"]),
}));

describe("ProductList", () => {
  it("renders a product list", async () => {
    render(
      <AuthProvider>
        <ProductList onSelectProduct={jest.fn()} />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Add Product")).toBeInTheDocument();
    });
  });
});