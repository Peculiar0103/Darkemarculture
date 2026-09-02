export interface Product {
  id: string
  name: string
  slug: string
  category: string
  priceGBP: number
  priceNGN?: number
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
    sizes: ["UK 8", "UK 10", "UK 12", "UK 14", "UK 16", "Custom Fit"],
    colors: ["Original"],
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
    sizes: ["UK 8", "UK 10", "UK 12", "UK 14", "UK 16", "Custom Fit"],
    colors: ["Original"],
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
    sizes: ["Free Size / One Size Fits All", "Custom Length"],
    colors: ["Original"],
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
    sizes: ["UK 8", "UK 10", "UK 12", "UK 14", "UK 16", "Custom Fit"],
    colors: ["Original"],
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
    sizes: ["Free Size / One Size Fits All", "Custom Length"],
    colors: ["Original"],
    inStock: true,
    description: "Comfortable and stylish Ankara Bubu dress featuring delicate stone detailing for added elegance.",
    images: []
  },
  {
    id: "6",
    name: "Ankara long gown with stone",
    slug: "ankara-long-gown-with-stone",
    category: "Ankara",
    priceGBP: 40,
    sizes: ["UK 8", "UK 10", "UK 12", "UK 14", "UK 16", "Custom Fit"],
    colors: ["Original"],
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
    sizes: ["UK 8", "UK 10", "UK 12", "UK 14", "UK 16", "Custom Fit"],
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
  },
  {
    id: "8",
    name: "2 piece set Ankara",
    slug: "2-piece-set-ankara",
    category: "Ankara",
    priceGBP: 34.99,
    sizes: ["UK 8", "UK 10", "UK 12", "UK 14", "UK 16", "Custom Fit"],
    colors: ["Original"],
    inStock: true,
    description: "A chic and modern 2-piece Ankara co-ord set designed for effortless cultural elegance, comfort, and everyday luxury.",
    images: [
      "/images/products/2 piece set Ankara/IMG-20260826-WA0133.jpg"
    ]
  },
  {
    id: "9",
    name: "Turkey brocade boubou",
    slug: "turkey-brocade-boubou",
    category: "Brocade",
    priceGBP: 60.99,
    sizes: ["Free Size / One Size Fits All", "Custom Length"],
    colors: ["Orange & Gold", "Classic Navy", "Rich Plum"],
    inStock: true,
    description: "Exquisite Turkey brocade boubou featuring a regal silhouette, rich damask texture, and effortless drape suitable for grand celebrations.",
    images: [
      "/images/products/Turkey brocade boubou/Turkey brocade boubou Front View.jpg",
      "/images/products/Turkey brocade boubou/Turkey brocade boubou Back View.jpg",
      "/images/products/Turkey brocade boubou/Turkey brocade boubou - orange.jpg"
    ]
  },
  {
    id: "10",
    name: "Aso oke fully stoned bubu",
    slug: "aso-oke-fully-stoned-bubu",
    category: "Aso Oke",
    priceGBP: 64.99,
    sizes: ["Free Size / One Size Fits All", "Custom Length"],
    colors: ["Royal Purple & Gold", "Wine & Bronze"],
    inStock: true,
    description: "Our signature luxury statement piece. Hand-crafted from authentic Aso Oke fabric and fully encrusted with shimmering crystal stones.",
    images: [
      "/images/products/Aso oke fully stoned bubu/Aso oke fully stoned bubu - Front view.jpg",
      "/images/products/Aso oke fully stoned bubu/Aso oke fully stoned bubu - Back view.jpg"
    ]
  },
  {
    id: "11",
    name: "Ankara mix with Aso Oke bubu",
    slug: "ankara-mix-with-aso-oke-bubu",
    category: "Ankara",
    priceGBP: 54.99,
    sizes: ["Free Size / One Size Fits All", "Custom Length"],
    colors: ["Gold & Ankara Print", "Classic Pattern"],
    inStock: true,
    description: "A breathtaking fusion of vibrant Ankara prints and opulent hand-woven Aso Oke detailing for a uniquely contemporary African aesthetic.",
    images: [
      "/images/products/Ankara mix with Asoke Oke bubu/Ankara mix with Asoke Oke bubu -  (Front View).jpg",
      "/images/products/Ankara mix with Asoke Oke bubu/Ankara mix with Asoke Oke bubu -  (Back View).jpg",
      "/images/products/Ankara mix with Asoke Oke bubu/Ankara mix with Asoke Oke bubu - gold (Front View).jpg"
    ]
  }
]
