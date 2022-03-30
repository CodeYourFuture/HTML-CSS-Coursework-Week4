import { Product, Category, Faq } from './types';

const shortDesc = 'I\'m a product description. I\'m a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.';
const longDesc = 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.';

export const products: Product[] = [
  { name: "I'm a product", price: 15, discount: 10, new: false, bestSeller: false, images: ['product1_1.png', 'product1_2.png'], cat: 0, shortDesc, longDesc },
  { name: "I'm a product", price: 30, discount: 0, new: false, bestSeller: true, images: ['product2_1.png', 'product2_2.png'], cat: 2, shortDesc, longDesc },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product3.png'], cat: 0, shortDesc, longDesc },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product4.png'], cat: 0, shortDesc, longDesc },
  { name: "I'm a product", price: 15, discount: 30, new: false, bestSeller: false, images: ['product5.png'], cat: 2, shortDesc, longDesc },
  { name: "I'm a product", price: 23, discount: 0, new: true, bestSeller: false, images: ['product6.png'], cat: 0, shortDesc, longDesc },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product7.png'], cat: 1, shortDesc, longDesc },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product8.png'], cat: 1, shortDesc, longDesc },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product9.png'], cat: 2, shortDesc, longDesc },
  { name: "I'm a product", price: 10, discount: 0, new: false, bestSeller: false, images: ['product10.png'], cat: 1, shortDesc, longDesc },
  { name: "I'm a product", price: 10, discount: 0, new: false, bestSeller: false, images: ['product11.png'], cat: 0, shortDesc, longDesc },
  { name: "I'm a product", price: 15, discount: 0, new: false, bestSeller: false, images: ['product12.png'], cat: 0, shortDesc, longDesc },
  { name: "I'm a product", price: 25, discount: 5, new: false, bestSeller: true, images: ['product13.png'], cat: 1, shortDesc, longDesc },
  { name: "I'm a product", price: 10, discount: 0, new: false, bestSeller: false, images: ['product14.png'], cat: 2, shortDesc, longDesc },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product15.png'], cat: 2, shortDesc, longDesc },
  { name: "I'm a product", price: 15, discount: 0, new: false, bestSeller: false, images: ['product16.png'], cat: 2, shortDesc, longDesc },
  { name: "I'm a product", price: 15, discount: 0, new: false, bestSeller: false, images: ['product17_1.png', 'product17_2.png'], cat: 1, shortDesc, longDesc },
  { name: "I'm a product", price: 8, discount: 0, new: false, bestSeller: false, images: ['product18.png'], cat: 2, shortDesc, longDesc },
];
const heroDesc = 'I\'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.';
export const categories: Category[] = [
  { name: 'Cacti', thumbnail: 'cacti.png', heroTitle: 'HAVE YOURSELF A CACTUS', heroDesc },
  { name: 'Plants', thumbnail: 'plants.png', heroTitle: 'THE WORLD NEEDS MORE PLANTS', heroDesc },
  { name: 'Succulents', thumbnail: 'succulents.png', heroTitle: 'WE LOVE SUCCULENTS', heroDesc },
];

export const faq:Faq[] = [
  { q: 'How to add a new question?', a: 'To add a new question go to app settings and press "Manage Questions" button.', toggle:false },
  { q: 'Can I instert pictures in my FAQ?', toggle:false, a: 'Yes! To add a picture follow these simple steps: \n Enter App Settings \n Click the "Manage Questions" button \n Click on the question you would like to attach a picture to \n  When editing your answer, click on the picture icon and then add an image from your library' },
  { q: 'Can I instert a video in my FAQ?', toggle:false, a: 'To add a new question go to app settings and press "Manage Questions" button.' },
  { q: 'How do I edit or remove the "FAQ title"?', toggle:false, a: 'The FAQ title can be adjusted in the settings tab of the App Settings. You can also remove the title by unchecking its checkbox in the settings tab.' },
];
