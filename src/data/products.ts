export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  meta: {
    createdAt: string;
    updatedAt: string;
  };
}

export const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    rating: 2.56,
    stock: 99,
    brand: "Essence",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    rating: 2.86,
    stock: 34,
    brand: "Glamour Beauty",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 3,
    title: "Powder Canister",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    rating: 4.64,
    stock: 89,
    brand: "Velvet Touch",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 4,
    title: "Red Lipstick",
    description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    rating: 4.36,
    stock: 91,
    brand: "Chic Cosmetics",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    rating: 4.32,
    stock: 79,
    brand: "Nail Couture",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    rating: 4.37,
    stock: 29,
    brand: "Calvin Klein",
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
    price: 129.99,
    rating: 4.26,
    stock: 58,
    brand: "Chanel",
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 8,
    title: "Dior J'adore",
    description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
    price: 89.99,
    rating: 3.8,
    stock: 98,
    brand: "Dior",
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "fragrances",
    price: 69.99,
    rating: 3.96,
    stock: 4,
    brand: "Dolce & Gabbana",
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: "fragrances",
    price: 79.99,
    rating: 2.74,
    stock: 91,
    brand: "Gucci",
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
    price: 1899.99,
    rating: 4.77,
    stock: 88,
    brand: "Annibale Colombo",
    thumbnail: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    description: "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    category: "furniture",
    price: 2499.99,
    rating: 3.92,
    stock: 60,
    brand: "Annibale Colombo",
    thumbnail: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    description: "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    category: "furniture",
    price: 299.99,
    rating: 2.87,
    stock: 64,
    brand: "Furniture Co.",
    thumbnail: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "furniture",
    price: 499.99,
    rating: 4.88,
    stock: 26,
    brand: "Knoll",
    thumbnail: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    description: "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    category: "furniture",
    price: 799.99,
    rating: 3.59,
    stock: 7,
    brand: "Bath Trends",
    thumbnail: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 16,
    title: "Apple",
    description: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    category: "groceries",
    price: 1.99,
    rating: 4.19,
    stock: 8,
    brand: "Fresh Farms",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 17,
    title: "Beef Steak",
    description: "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    category: "groceries",
    price: 12.99,
    rating: 4.47,
    stock: 86,
    brand: "Prime Meats",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 18,
    title: "Cat Food",
    description: "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    category: "groceries",
    price: 8.99,
    rating: 3.13,
    stock: 46,
    brand: "Pet Nutrition",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 19,
    title: "Chicken Meat",
    description: "Fresh and tender chicken meat, suitable for various culinary preparations.",
    category: "groceries",
    price: 9.99,
    rating: 3.19,
    stock: 97,
    brand: "Farm Fresh",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 20,
    title: "Cooking Oil",
    description: "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    category: "groceries",
    price: 4.99,
    rating: 4.8,
    stock: 10,
    brand: "Golden Oil",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 21,
    title: "Cucumber",
    description: "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    category: "groceries",
    price: 1.49,
    rating: 4.07,
    stock: 84,
    brand: "Fresh Farms",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 22,
    title: "Dog Food",
    description: "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    category: "groceries",
    price: 10.99,
    rating: 4.55,
    stock: 71,
    brand: "Pet Nutrition",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 23,
    title: "Eggs",
    description: "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    category: "groceries",
    price: 2.99,
    rating: 2.53,
    stock: 9,
    brand: "Farm Fresh",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 24,
    title: "Fish Steak",
    description: "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    category: "groceries",
    price: 14.99,
    rating: 3.78,
    stock: 74,
    brand: "Ocean Catch",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 25,
    title: "Green Bell Pepper",
    description: "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    category: "groceries",
    price: 1.29,
    rating: 3.25,
    stock: 33,
    brand: "Fresh Farms",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 26,
    title: "Green Chili Pepper",
    description: "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    category: "groceries",
    price: 0.99,
    rating: 3.66,
    stock: 3,
    brand: "Spice Garden",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 27,
    title: "Honey Jar",
    description: "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    category: "groceries",
    price: 6.99,
    rating: 3.97,
    stock: 34,
    brand: "Nature's Best",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 28,
    title: "Ice Cream",
    description: "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    category: "groceries",
    price: 5.49,
    rating: 3.39,
    stock: 27,
    brand: "Frozen Delights",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 29,
    title: "Juice",
    description: "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    category: "groceries",
    price: 3.99,
    rating: 3.94,
    stock: 50,
    brand: "Fresh Squeeze",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  },
  {
    id: 30,
    title: "Kiwi",
    description: "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    category: "groceries",
    price: 2.49,
    rating: 4.93,
    stock: 99,
    brand: "Tropical Fruits",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z"
    }
  }
];