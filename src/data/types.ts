export interface GPU {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    rating: number;
    isNew?: boolean;
    image?: string;
    specs: {
      memory: string;
      memoryType: string;
      coreClock: string;
      boostClock: string;
    };
    stock: number;
    category: string[];
  }