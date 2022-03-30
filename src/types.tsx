export type Product = { 
  name: string, 
  price: number, 
  discount: number, 
  new: boolean, 
  bestSeller: boolean, 
  images: string[], 
  cat: number,
  shortDesc: string,
  longDesc: string, 
};
  
export type Category = {
  name: string,
  thumbnail: string,
  heroTitle: string,
  heroDesc: string,
};

export type Faq = {
  q: string,
  a: string,
  toggle: boolean,
};