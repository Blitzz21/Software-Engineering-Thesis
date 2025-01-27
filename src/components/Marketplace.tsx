import React, { useState } from 'react';
import Workstation from '../img/workstation.jpg'
import Gaming from '../img/gaming.jpg'
import AI from '../img/ai.jpg'
import Mining from '../img/mining.jpg'

// Types
interface GPU {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isNew?: boolean;
  specs: {
    memory: string;
    memoryType: string;
    coreClock: string;
    boostClock: string;
  };
  image?: string;
  stock: number;
  category: string[];
}

interface CategoryCard {
  name: string;
  image: string;
  description: string;
}

// Product Data
const gpuData: GPU[] = [
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
    image: '../img/rtx4090-rog.jpg',
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
    image: "../img/rx7900xtx-nitro.jpg",
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
    image: '../img/rtx4080super-gaming.jpg',
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
    image: '../img/arc770-limited.jpg',
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
    image: "../img/rtx4070ti-gaming.png",
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
    image: '../img/rtx4060ti-twin.jpg',
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
    image: '../img/rx6700xt-pulse.jpg',
    stock: 28,
    category: ["Gaming", "Mining"]
  },
  {
    id: "rtx3080ti-ftw3",
    name: "RTX 3080 TI",
    brand: "EVGA FTW3",
    price: 549.99,
    originalPrice: 599.99,
    rating: 4,
    specs: {
      memory: "12GB",
      memoryType: "GDDR6X",
      coreClock: "1900 MHz",
      boostClock: "1800 MHz"
    },
    image: "../img/rtx3080ti-ftw3.jpg",
    stock: 18,
    category: ["Gaming", "Workstation"]
  }
];

// Category Data
const categories: CategoryCard[] = [
  {
    name: "Gaming",
    image: Gaming,
    description: "High-performance GPUs for ultimate gaming experience"
  },
  {
    name: "Workstation",
    image: Workstation,
    description: "Professional graphics solutions for demanding workflows"
  },
  {
    name: "Mining",
    image: Mining,
    description: "Efficient GPUs for cryptocurrency mining"
  },
  {
    name: "AI",
    image: AI,
    description: "Accelerated computing for machine learning and AI"
  }
];

// Helper Functions
const getNewArrivals = () => gpuData.filter(gpu => gpu.isNew);
const getTopSelling = () => gpuData.filter(gpu => !gpu.isNew).sort((a, b) => b.rating - a.rating);
const getByCategory = (category: string) => gpuData.filter(gpu => gpu.category.includes(category));

// Components
const GPUCard: React.FC<GPU> = ({ 
  name, 
  brand, 
  price, 
  originalPrice, 
  rating, 
  image, 
  specs,
  stock 
}) => (
  <div className="satoshi bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <div className="w-full aspect-square overflow-hidden rounded-t-lg">
        <img 
          src={image || "/api/placeholder/400/400"} 
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      {stock < 10 && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
          Low Stock
        </span>
      )}
    </div>
    <div className="p-4">
      <p className="text-sm text-gray-600 mb-1">{brand}</p>
      <h3 className="integral font-bold text-lg mb-1">{name}</h3>
      <p className="text-xs text-gray-500 mb-2">
        {specs.memory} {specs.memoryType} • {specs.boostClock}
      </p>
      <div className="flex justify-center my-2">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <p className="font-bold text-lg">${price}</p>
          {originalPrice && (
            <p className="text-sm text-red-500 line-through">${originalPrice}</p>
          )}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const CategoryCard: React.FC<CategoryCard & { productCount: number }> = ({ 
  name, 
  image, 
  description, 
  productCount 
}) => (
  <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
      style={{ backgroundImage: `url(${image})` }}
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300" />
    
    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
      <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
        {name}
      </h3>
      <p className="text-sm text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
          {productCount} Products
        </span>
        <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
      </div>
    </div>
  </div>
);

const ProductGrid: React.FC<{
  products: GPU[];
  showAll: boolean;
  onToggleView: () => void;
}> = ({ products, showAll, onToggleView }) => {
  const displayProducts = showAll ? products : products.slice(0, 5);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {displayProducts.map((gpu) => (
          <GPUCard key={gpu.id} {...gpu} />
        ))}
      </div>
      {products.length > 5 && (
        <div className="text-center mt-8">
          <button 
            onClick={onToggleView}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300"
          >
            {showAll ? 'Show Less' : 'View All Products'}
          </button>
        </div>
      )}
    </>
  );
};

// Main Component
const Marketplace: React.FC = () => {
  const [showAllNew, setShowAllNew] = useState(false);
  const [showAllTop, setShowAllTop] = useState(false);

  return (
    <div id='Marketplace' className="satoshi min-h-screen bg-gray-50">
      <div className="w-dvw mx-auto py-8 px-4 md:px-[54px] lg:px-[184px]">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="integral text-4xl font-bold mb-4">GPU Marketplace</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect graphics card for your needs, from gaming to professional workstations
          </p>
        </div>

        {/* New Arrivals Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="integral text-3xl font-bold">New Arrivals</h2>
            <span className="text-blue-500">Latest releases</span>
          </div>
          <ProductGrid 
            products={getNewArrivals()}
            showAll={showAllNew}
            onToggleView={() => setShowAllNew(!showAllNew)}
          />
        </section>

        {/* Top Selling Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="integral text-3xl font-bold">Top Selling</h2>
            <span className="text-blue-500">Customer favorites</span>
          </div>
          <ProductGrid 
            products={getTopSelling()}
            showAll={showAllTop}
            onToggleView={() => setShowAllTop(!showAllTop)}
          />
        </section>

        {/* Browse by Workload Section */}
        <section className="mb-16">
          <h2 className="integral text-3xl font-bold mb-6">Browse by Workload</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                {...category}
                productCount={getByCategory(category.name).length}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketplace;