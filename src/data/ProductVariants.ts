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
    { color: "Blue", size: "S", stock: 8 },
    { color: "Blue", size: "M", stock: 1 },
  ],

  2: [
    { color: "Red", size: "S", stock: 10 },
    { color: "Red", size: "M", stock: 5 },
    { color: "Navy", size: "S", stock: 8 },
    { color: "Navy", size: "M", stock: 3 },
  ],

  3: [
    { color: "Green", size: "S", stock: 6 },
    { color: "Green", size: "M", stock: 2 },
    { color: "Olive", size: "S", stock: 4 },
    { color: "Olive", size: "M", stock: 1 },
  ],

  4: [
    { color: "Tan", size: "S", stock: 8 },
    { color: "Tan", size: "M", stock: 2 },
    { color: "Brown", size: "S", stock: 5 },
    { color: "Brown", size: "M", stock: 1 },
  ],

  5: [
    { color: "Black", size: "S", stock: 10 },
    { color: "Black", size: "M", stock: 4 },
    { color: "Gray", size: "S", stock: 7 },
    { color: "Gray", size: "M", stock: 2 },
  ],

  6: [
    { color: "Silver", size: "128GB", stock: 10 },
    { color: "Silver", size: "256GB", stock: 2 },
    { color: "Space Black", size: "128GB", stock: 6 },
    { color: "Space Black", size: "256GB", stock: 1 },
  ],

  7: [
    { color: "White", size: "128GB", stock: 5 },
    { color: "White", size: "256GB", stock: 2 },
    { color: "Midnight", size: "128GB", stock: 4 },
    { color: "Midnight", size: "256GB", stock: 1 },
  ],

  8: [
    { color: "Black", size: "One Size", stock: 8 },
    { color: "Blue", size: "One Size", stock: 5 },
    { color: "Red", size: "One Size", stock: 3 },
  ],

  9: [
    { color: "Gold", size: "One Size", stock: 4 },
    { color: "Silver", size: "One Size", stock: 6 },
    { color: "Black", size: "One Size", stock: 2 },
  ],

  10: [
    { color: "Rose Gold", size: "One Size", stock: 1 },
    { color: "Silver", size: "One Size", stock: 5 },
    { color: "Black", size: "One Size", stock: 3 },
  ],
};
