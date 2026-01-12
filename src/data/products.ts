import poppySeeds from '@/assets/products/poppy-seeds.png';
import flaxSeeds from '@/assets/products/flax-seeds.png';
import chiaSeeds from '@/assets/products/chia-seeds.png';
import mustardSeeds from '@/assets/products/mustard-seeds.png';
import turmericPowder from '@/assets/products/turmeric-powder.png';
import corianderSeeds from '@/assets/products/coriander-seeds.png';
import moringaPowder from '@/assets/products/moringa-powder.png';
import corianderPowder from '@/assets/products/coriander-powder.png';
import chilliPowder from '@/assets/products/chilli-powder.png';
import groundnut from '@/assets/products/groundnut.png';
import chickpea from '@/assets/products/chickpea.png';
import desiGhee from '@/assets/products/desi-ghee.png';

export interface Product {
  id: string;
  name: string;
  nameHindi: string;
  category: string;
  description: string;
  benefits: string[];
  ingredients: string;
  usage: string;
  prices: {
    weight: string;
    price: number;
  }[];
  image: string;
  featured?: boolean;
}

export const categories = [
  { id: 'seeds', name: 'Seeds', nameHindi: 'बीज', icon: '🌱' },
  { id: 'powders', name: 'Powders & Spices', nameHindi: 'मसाले', icon: '🌶️' },
  { id: 'pulses', name: 'Pulses & Dry Foods', nameHindi: 'दालें', icon: '🥜' },
  { id: 'ghee', name: 'Desi Ghee', nameHindi: 'देसी घी', icon: '🧈' },
];

export const products: Product[] = [
  // Seeds
  {
    id: 'poppy-seeds',
    name: 'Poppy Seeds',
    nameHindi: 'खसखस',
    category: 'seeds',
    description: 'Premium quality poppy seeds sourced directly from village farms. Rich in nutrients and perfect for Indian cuisine.',
    benefits: ['Rich in minerals', 'Aids sleep', 'Good for skin', 'Natural coolant'],
    ingredients: '100% Natural Poppy Seeds',
    usage: 'Add to curries, sweets, and baked goods. Can be used to make paste for gravies.',
    prices: [
      { weight: '100g', price: 170 },
      { weight: '250g', price: 425 },
      { weight: '500g', price: 850 },
    ],
    image: poppySeeds,
    featured: true,
  },
  {
    id: 'flax-seeds',
    name: 'Flax Seeds',
    nameHindi: 'अलसी',
    category: 'seeds',
    description: 'Organic flax seeds rich in omega-3 fatty acids. A superfood for your daily diet.',
    benefits: ['High in Omega-3', 'Fiber rich', 'Heart healthy', 'Weight management'],
    ingredients: '100% Organic Flax Seeds',
    usage: 'Add to smoothies, salads, or grind for flour. Consume 1-2 tablespoons daily.',
    prices: [
      { weight: '100g', price: 65 },
      { weight: '250g', price: 150 },
      { weight: '500g', price: 280 },
    ],
    image: flaxSeeds,
    featured: true,
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    nameHindi: 'चिया बीज',
    category: 'seeds',
    description: 'Premium chia seeds packed with nutrition. Perfect for health-conscious individuals.',
    benefits: ['Energy booster', 'Rich in protein', 'High fiber', 'Antioxidants'],
    ingredients: '100% Natural Chia Seeds',
    usage: 'Soak in water or milk. Add to puddings, smoothies, or sprinkle on salads.',
    prices: [
      { weight: '100g', price: 50 },
      { weight: '250g', price: 125 },
      { weight: '500g', price: 250 },
    ],
    image: chiaSeeds,
  },
  {
    id: 'mustard-seeds',
    name: 'Mustard Seeds',
    nameHindi: 'राई',
    category: 'seeds',
    description: 'Traditional Indian mustard seeds for authentic tempering and pickles.',
    benefits: ['Digestive aid', 'Anti-inflammatory', 'Rich in selenium', 'Metabolism booster'],
    ingredients: '100% Natural Mustard Seeds',
    usage: 'Use for tempering dals, vegetables, and making pickles.',
    prices: [
      { weight: '100g', price: 35 },
      { weight: '250g', price: 80 },
      { weight: '500g', price: 150 },
    ],
    image: mustardSeeds,
  },
  {
    id: 'coriander-seeds',
    name: 'Coriander Seeds',
    nameHindi: 'धनिया',
    category: 'seeds',
    description: 'Aromatic coriander seeds for authentic Indian cooking and tempering.',
    benefits: ['Digestive health', 'Blood sugar control', 'Anti-oxidant', 'Skin health'],
    ingredients: '100% Pure Coriander Seeds',
    usage: 'Use for tempering, grind for powder, or add to pickles.',
    prices: [
      { weight: '100g', price: 60 },
      { weight: '250g', price: 150 },
      { weight: '500g', price: 300 },
    ],
    image: corianderSeeds,
    featured: true,
  },
  // Powders & Spices
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    nameHindi: 'हल्दी',
    category: 'powders',
    description: 'Pure village-sourced turmeric with high curcumin content. Essential for every Indian kitchen.',
    benefits: ['Anti-inflammatory', 'Immunity booster', 'Skin health', 'Natural antiseptic'],
    ingredients: '100% Pure Turmeric',
    usage: 'Use in curries, golden milk, face masks, and healing remedies.',
    prices: [
      { weight: '100g', price: 45 },
      { weight: '250g', price: 100 },
      { weight: '500g', price: 180 },
      { weight: '1kg', price: 340 },
    ],
    image: turmericPowder,
    featured: true,
  },
  {
    id: 'chilli-powder',
    name: 'Red Chilli Powder',
    nameHindi: 'लाल मिर्च',
    category: 'powders',
    description: 'Authentic desi red chilli powder with perfect heat and vibrant color.',
    benefits: ['Metabolism booster', 'Rich in Vitamin C', 'Pain relief', 'Digestive aid'],
    ingredients: '100% Pure Red Chillies',
    usage: 'Add to curries, marinades, and any dish that needs heat and color.',
    prices: [
      { weight: '100g', price: 55 },
      { weight: '250g', price: 130 },
      { weight: '500g', price: 240 },
      { weight: '1kg', price: 450 },
    ],
    image: chilliPowder,
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    nameHindi: 'धनिया पाउडर',
    category: 'powders',
    description: 'Freshly ground coriander powder with aromatic flavor.',
    benefits: ['Digestive health', 'Blood sugar control', 'Anti-oxidant', 'Skin health'],
    ingredients: '100% Pure Coriander Seeds',
    usage: 'Essential spice for all Indian curries and vegetable dishes.',
    prices: [
      { weight: '100g', price: 40 },
      { weight: '250g', price: 90 },
      { weight: '500g', price: 170 },
    ],
    image: corianderPowder,
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    nameHindi: 'सहजन पाउडर',
    category: 'powders',
    description: 'Organic moringa leaf powder - the miracle superfood from nature.',
    benefits: ['Nutrient dense', 'Energy booster', 'Anti-inflammatory', 'Immune support'],
    ingredients: '100% Organic Moringa Leaves',
    usage: 'Add to smoothies, soups, or mix with water. 1-2 teaspoons daily.',
    prices: [
      { weight: '100g', price: 199 },
      { weight: '250g', price: 449 },
      { weight: '500g', price: 849 },
    ],
    image: moringaPowder,
  },
  // Pulses & Dry Foods
  {
    id: 'groundnut',
    name: 'Groundnut',
    nameHindi: 'मूंगफली',
    category: 'pulses',
    description: 'Premium quality raw groundnuts from village farms.',
    benefits: ['Protein rich', 'Heart healthy fats', 'Energy source', 'Muscle building'],
    ingredients: '100% Raw Groundnuts',
    usage: 'Roast, boil, or use in cooking. Perfect for chutney and sweets.',
    prices: [
      { weight: '250g', price: 60 },
      { weight: '500g', price: 110 },
      { weight: '1kg', price: 200 },
    ],
    image: groundnut,
  },
  {
    id: 'chickpea',
    name: 'Chickpea',
    nameHindi: 'चना',
    category: 'pulses',
    description: 'Organic desi chickpeas rich in protein and fiber.',
    benefits: ['High protein', 'Fiber rich', 'Weight management', 'Blood sugar control'],
    ingredients: '100% Organic Chickpeas',
    usage: 'Soak overnight and cook. Use in curries, salads, or roast for snacking.',
    prices: [
      { weight: '250g', price: 55 },
      { weight: '500g', price: 100 },
      { weight: '1kg', price: 180 },
    ],
    image: chickpea,
  },
  // Ghee
  {
    id: 'desi-ghee',
    name: 'Desi Ghee',
    nameHindi: 'देसी घी',
    category: 'ghee',
    description: 'Pure A2 cow ghee made using traditional bilona method. The taste of authentic village ghee.',
    benefits: ['Rich in vitamins', 'Digestive health', 'Brain function', 'Joint health'],
    ingredients: '100% Pure A2 Cow Milk',
    usage: 'Use for cooking, tempering, or consume directly. Add to dal, roti, or rice.',
    prices: [
      { weight: '250ml', price: 350 },
      { weight: '500ml', price: 650 },
      { weight: '1L', price: 1200 },
    ],
    image: desiGhee,
    featured: true,
  },
];

export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
