export type Product = {
    id: number
    name: string
    description: string
    price: number
    images: string[] 
    colors: string[]
    sizes: string[]
  }
  
  const mockProducts: Product[] = [
    {
        id: 1,
        name: "Sanda ablastra",
        description: "This is a great product. Perfect for your collection. Ideal for any occasion.",
        price: 29.99,
        images: [
        "https://images.fashion-trading.com/catalog/product/217402/m_ay01.jpg",
        "https://images.fashion-trading.com/catalog/product/217402/m_ay02.jpg",
        "https://images.fashion-trading.com/catalog/product/217402/m_ay03.jpg", 
        "https://images.fashion-trading.com/catalog/product/217402/m_ay04.jpg",
      ],
      colors: ["Red", "Blue", "Green"],
      sizes: ["S", "M", "L"],
      },
      {
        id: 2,
        name: "sneaker Negru",
        description: "Another awesome product. Great for casual wear. Stylish and comfortable.",
        price: 49.99,
        images: [
          "https://images.fashion-trading.com/catalog/product/217477/m_ay01.jpg",
          "https://images.fashion-trading.com/catalog/product/217477/m_ay02.jpg",
          "https://images.fashion-trading.com/catalog/product/217477/m_ay03.jpg",
          "https://images.fashion-trading.com/catalog/product/217477/m_ay04.jpg",
        ],
        colors: ["Red", "Blue", "Green"],
      sizes: ["S", "M", "L"],
      },
      {
        id: 3,
        name: "Pantolea dama",
        description: "Must-have item for your shop.   Stylish and versatile. Perfect for any outfit. ",
        price: 19.99,
        images: [
          "https://images.fashion-trading.com/catalog/product/217483/m_ay01.jpg",
          "https://images.fashion-trading.com/catalog/product/217483/m_ay02.jpg",
          "https://images.fashion-trading.com/catalog/product/217483/m_ay03.jpg",
          "https://images.fashion-trading.com/catalog/product/217483/m_ay04.jpg",
        ],
        colors: ["Red", "Blue", "Green"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 4,
      name: "cartof de aur",
      description: "This is a great product. Perfect for your collection. Ideal for any occasion.",
      price: 29.99,
      images: [
        "https://images.fashion-trading.com/catalog/product/217402/m_ay01.jpg",
        "https://images.fashion-trading.com/catalog/product/217402/m_ay02.jpg",
        "https://images.fashion-trading.com/catalog/product/217402/m_ay03.jpg",
        "https://images.fashion-trading.com/catalog/product/217402/m_ay04.jpg",
      ],
      colors: ["Red", "Blue", "Green"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 5,
      name: "bicicleta de argint",
      description: "Another awesome product.",
      price: 49.99,
      images: [
        "https://images.fashion-trading.com/catalog/product/217477/m_ay01.jpg",
        "https://images.fashion-trading.com/catalog/product/217477/m_ay02.jpg",
        "https://images.fashion-trading.com/catalog/product/217477/m_ay03.jpg",
        "https://images.fashion-trading.com/catalog/product/217477/m_ay04.jpg",
      ],
      colors: ["Red", "Blue", "Green"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 6,
      name: "spacare dama",
      description: "Must-have item for your shop.",
      price: 19.99,
      images: [
        "https://images.fashion-trading.com/catalog/product/217483/m_ay01.jpg",
        "https://images.fashion-trading.com/catalog/product/217483/m_ay02.jpg",
        "https://images.fashion-trading.com/catalog/product/217483/m_ay03.jpg",
        "https://images.fashion-trading.com/catalog/product/217483/m_ay04.jpg", 
      ],
      colors: ["Red", "Blue", "Green"],
      sizes: ["S", "M", "L"],
    }
  ]
  
  export async function getAllProducts(): Promise<Product[]> {
    return mockProducts
  }
  
  export async function getProductById(id: number): Promise<Product | undefined> {
    return mockProducts.find((p) => p.id === id)
  }
  