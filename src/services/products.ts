import { productsResponseSchema } from "../schemas/product";
import type { ProductsResponse } from "../types/product";

export async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(
    "https://dummyjson.com/products/category/laptops"
  );

  if (!response.ok) {
    throw new Error(
      `Não foi possível carregar os produtos. Código: ${response.status}`
    );
  }

  const data: unknown = await response.json();

  return productsResponseSchema.parse(data);
}
