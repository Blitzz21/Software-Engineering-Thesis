import { GPU } from './types'

export const gpuData: GPU[] = [
    {
      id: "rtx4090-rog",
      name: "RTX 4090",
      brand: "ASUS ROG STRIX",
      price: 1599.99,
      rating: 5,
      isNew: true,
      specs: {
        memory: "24GB",
        memoryType: "GDDR6X",
        coreClock: "2235 MHz",
        boostClock: "2640 MHz"
      },
      image: "/images/rtx4090-rog.png",
      stock: 15,
      category: ["Gaming", "AI", "Workstation"]
    },
    {
      id: "rx7900xtx-nitro",
      name: "RX 7900 XTX",
      brand: "Sapphire Nitro+",
      price: 999.99,
      rating: 4,
      isNew: true,
      specs: {
        memory: "24GB",
        memoryType: "GDDR6",
        coreClock: "1900 MHz",
        boostClock: "2500 MHz"
      },
      image: "/images/rx7900xtx-nitro.png",
      stock: 22,
      category: ["Gaming", "Mining"]
    },
    {
      id: "rtx4080super-gaming",
      name: "RTX 4080 SUPER",
      brand: "MSI Gaming X Trio",
      price: 1199.99,
      rating: 5,
      isNew: true,
      specs: {
        memory: "16GB",
        memoryType: "GDDR6X",
        coreClock: "2205 MHz",
        boostClock: "2550 MHz"
      },
      stock: 8,
      category: ["Gaming", "Workstation"]
    },
    {
      id: "arc770-limited",
      name: "Arc A770 Limited Edition",
      brand: "Intel",
      price: 349.99,
      rating: 4,
      isNew: true,
      specs: {
        memory: "16GB",
        memoryType: "GDDR6",
        coreClock: "2100 MHz",
        boostClock: "2400 MHz"
      },
      stock: 30,
      category: ["Gaming"]
    },
    {
      id: "rtx4070ti-gaming",
      name: "RTX 4070 Ti SUPER",
      brand: "GIGABYTE AORUS",
      price: 799.99,
      rating: 4,
      isNew: true,
      specs: {
        memory: "16GB",
        memoryType: "GDDR6X",
        coreClock: "2310 MHz",
        boostClock: "2670 MHz"
      },
      image: "/images/4070ti-aorus.png",
      stock: 12,
      category: ["Gaming", "Workstation"]
    },
    {
      id: "rtx4060ti-twin",
      name: "RTX 4060 Ti",
      brand: "GIGABYTE WindForce",
      price: 379.99,
      originalPrice: 449.99,
      rating: 4,
      specs: {
        memory: "8GB",
        memoryType: "GDDR6",
        coreClock: "2310 MHz",
        boostClock: "2535 MHz"
      },
      stock: 45,
      category: ["Gaming"]
    },
    {
      id: "rx6700xt-pulse",
      name: "RX 6700 XT",
      brand: "Sapphire Pulse",
      price: 329.99,
      originalPrice: 399.99,
      rating: 5,
      specs: {
        memory: "12GB",
        memoryType: "GDDR6",
        coreClock: "2321 MHz",
        boostClock: "2581 MHz"
      },
      stock: 28,
      category: ["Gaming", "Mining"]
    },
    {
      id: "rtx4070-ftw3",
      name: "RTX 4070",
      brand: "EVGA FTW3",
      price: 549.99,
      originalPrice: 599.99,
      rating: 4,
      specs: {
        memory: "12GB",
        memoryType: "GDDR6X",
        coreClock: "1920 MHz",
        boostClock: "2475 MHz"
      },
      image: "/images/4070-ftw3.png",
      stock: 18,
      category: ["Gaming", "Workstation"]
    },
    {
      id: "rx7800xt-red-devil",
      name: "RX 7800 XT",
      brand: "PowerColor Red Devil",
      price: 499.99,
      originalPrice: 549.99,
      rating: 4,
      specs: {
        memory: "16GB",
        memoryType: "GDDR6",
        coreClock: "2124 MHz",
        boostClock: "2430 MHz"
      },
      stock: 25,
      category: ["Gaming", "Mining"]
    },
    {
      id: "rtx3060-twin",
      name: "RTX 3060",
      brand: "ZOTAC Twin Edge",
      price: 279.99,
      originalPrice: 329.99,
      rating: 5,
      specs: {
        memory: "12GB",
        memoryType: "GDDR6",
        coreClock: "1777 MHz",
        boostClock: "1867 MHz"
      },
      stock: 50,
      category: ["Gaming"]
    }
  ];
  
  // Helper functions
  export const getNewArrivals = (): GPU[] => {
    return gpuData.slice(0, 10); // Returns first 10 items as new arrivals
  };
  
  export const getTopSelling = (): GPU[] => {
    return gpuData.filter(gpu => gpu.rating >= 4); // Returns items with high ratings
  };
  
  export const getByCategory = (category: string): GPU[] => {
    return gpuData.filter(gpu => gpu.category.includes(category));
  };