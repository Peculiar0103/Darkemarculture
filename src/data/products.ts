export interface Product {
  id: string
  name: string
  slug: string
  category: string
  priceGBP: number
  priceNGN: number
  sizes: string[]
  colors: string[]
  inStock: boolean
  description: string
  images: string[] // Array of image URLs for the gallery
}

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Ankara with stone",
    slug: "ankara-with-stone",
    category: "Ankara",
    priceGBP: 45,
    priceNGN: 67500, // Roughly £45 * 1500 for NGN if needed, or based on previous exchange rate. Let's use £1 = 1500 NGN
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Default"],
    inStock: true,
    description: "Elegant Ankara adorned with beautiful stone embellishments. A perfect blend of traditional pattern and modern luxury detailing.",
    images: ["/images/products/ankara-with-stone/image-01.jpeg", "/images/products/ankara-with-stone/image-02.jpeg"]
  },
  {
    id: "2",
    name: "Aso Oke long dress",
    slug: "aso-oke-long-dress",
    category: "Aso Oke",
    priceGBP: 50,
    priceNGN: 75000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Default"],
    inStock: true,
    description: "A majestic Aso Oke long dress. Crafted from premium hand-woven fabric, designed to offer a regal and timeless silhouette.",
    images: ["/images/products/aso-oke-long-dress/image-01.jpeg", "/images/products/aso-oke-long-dress/image-02.jpeg"]
  },
  {
    id: "3",
    name: "Aso Oke Bubu stoned",
    slug: "aso-oke-bubu-stoned",
    category: "Aso Oke",
    priceGBP: 60,
    priceNGN: 90000,
    sizes: ["One Size Fits Most"],
    colors: ["Default"],
    inStock: true,
    description: "Our signature free-flowing Aso Oke Bubu, heavily embellished with premium stones for a luxurious, sparkling finish.",
    images: ["/images/products/aso-oke-bubu-stoned/image-01.jpeg", "/images/products/aso-oke-bubu-stoned/image-02.jpeg"]
  },
  {
    id: "4",
    name: "Turkey brocade",
    slug: "turkey-brocade",
    category: "Brocade",
    priceGBP: 65,
    priceNGN: 97500,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Default"],
    inStock: true,
    description: "Premium Turkey brocade fabric tailored into a sophisticated masterpiece. Characterised by its rich texture and exquisite drape.",
    images: ["/images/products/turkey-brocade/image-01.jpeg", "/images/products/turkey-brocade/image-02.jpeg"]
  },
  {
    id: "5",
    name: "Ankra bubu with stone",
    slug: "ankra-bubu-with-stone",
    category: "Ankara",
    priceGBP: 45,
    priceNGN: 67500,
    sizes: ["One Size Fits Most"],
    colors: ["Default"],
    inStock: true,
    description: "Comfortable and stylish Ankara Bubu dress featuring delicate stone detailing for added elegance.",
    images: [] // No folder found yet
  },
  {
    id: "6",
    name: "Ankara long gown with stone",
    slug: "ankara-long-gown-with-stone",
    category: "Ankara",
    priceGBP: 40,
    priceNGN: 60000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Default"],
    inStock: true,
    description: "A stunning floor-length Ankara gown. The intricate stone work elevates this traditional piece into modern luxury.",
    images: ["/images/products/ankara-long-gown-with-stone/image-01.jpeg", "/images/products/ankara-long-gown-with-stone/image-02.jpeg"]
  },
  {
    id: "7",
    name: "2piece Set Adire Crepe",
    slug: "2piece-set-adire-crepe",
    category: "Adire",
    priceGBP: 35,
    priceNGN: 52500,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Rust & Green", "Blue & Olive", "Mustard & Blue", "Orange & Green", "Navyblue & Yellow Gold", "Teal & Wine Red"],
    inStock: true,
    description: "A vibrant and contemporary 2-piece set made from premium Adire crepe. Available in multiple striking colour combinations.",
    images: [
      "/images/products/2piece-set-adire-crepe/image-01.jpeg",
      "/images/products/2piece-set-adire-crepe/image-02.jpeg",
      "/images/products/2piece-set-adire-crepe/image-03.jpeg",
      "/images/products/2piece-set-adire-crepe/image-04.jpeg",
      "/images/products/2piece-set-adire-crepe/image-05.jpeg",
      "/images/products/2piece-set-adire-crepe/image-06.jpeg"
    ]
  }
]
