export type Product = {
    id: number
    name: string
    description: string
    price: number
    image: string
  }
  
  const mockProducts: Product[] = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a great product.",
        price: 29.99,
        image:
          "https://images.fashion-trading.com/catalog/product/217402/m_ay01.jpg",
      },
      {
        id: 2,
        name: "Product 2",
        description: "Another awesome product.",
        price: 49.99,
        image:
          "https://images.fashion-trading.com/catalog/product/217477/m_ay01.jpg",
      },
      {
        id: 3,
        name: "Product 3",
        description: "Must-have item for your shop.",
        price: 19.99,
        image:
          "https://images.fashion-trading.com/catalog/product/217483/m_ay01.jpg",
      },
  ]
  
  export async function getAllProducts(): Promise<Product[]> {
    return mockProducts
  }
  
  export async function getProductById(id: number): Promise<Product | undefined> {
    return mockProducts.find((p) => p.id === id)
  }
  