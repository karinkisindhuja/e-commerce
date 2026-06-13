export const productVariants: Record<
  number,
  {
    color: string;
    size: string;
    stock: number;
  }[]
> = {
  1: [
    { color: "Black", size: "S", stock: 10 },
    { color: "Black", size: "M", stock: 2 },
    { color: "Black", size: "L", stock: 0 },
 
    { color: "Blue", size: "S", stock: 8 },
    { color: "Blue", size: "M", stock: 1 },
    { color: "Blue", size: "L", stock: 0 },
  ],
 
  2: [
    { color: "Red", size: "S", stock: 10 },
    { color: "Red", size: "M", stock: 5 },
    { color: "Red", size: "L", stock: 0 },
  ],
 
  3: [
    { color: "Green", size: "S", stock: 6 },
    { color: "Green", size: "M", stock: 2 },
    { color: "Green", size: "L", stock: 0 },
  ],
 
  4: [
    { color: "Tan", size: "S", stock: 8 },
    { color: "Tan", size: "M", stock: 2 },
    { color: "Tan", size: "L", stock: 0 },
  ],
 
  5: [
    { color: "Black", size: "S", stock: 10 },
    { color: "Black", size: "M", stock: 4 },
    { color: "Black", size: "L", stock: 0 },
  ],
 
  6: [
    { color: "Silver", size: "128GB", stock: 10 },
    { color: "Silver", size: "256GB", stock: 2 },
    { color: "Silver", size: "512GB", stock: 0 },
  ],
 
  7: [
    { color: "White", size: "128GB", stock: 5 },
    { color: "White", size: "256GB", stock: 2 },
    { color: "White", size: "512GB", stock: 0 },
  ],
 
  8: [{ color: "Black", size: "One Size", stock: 8 }],
 
  9: [{ color: "Gold", size: "One Size", stock: 4 }],
 
  10: [{ color: "RoseGold", size: "One Size", stock: 1 }],
};
 