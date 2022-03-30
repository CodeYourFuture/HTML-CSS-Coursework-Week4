import React from 'react';
import { products, categories } from '../data';
import { Product, Category } from '../types';
import { useParams } from 'react-router-dom';
import '../css/shop.scss';
import '../css/styles.scss';

const ShopHero: React.FC<{ heroTitle?: string, heroDesc?: string, catName?:string }> = ({ heroTitle, heroDesc, catName }) => {
  return (
        <section className={`hero ${catName ? catName : ''}`}>
            <h1>{heroTitle ? heroTitle : 'EVERYTHING THAT GROWS IN OUR GARDEN'}</h1>
            <p>
            {heroDesc ? heroDesc : 'I\'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'}
            </p>
        </section>
  );
};

interface Props {
  products: Product[],
  categoryName: string | undefined,
  addItemToCart: (i:number) => void
}

const ShopProducts: React.FC<Props> = (Props) => {
  return (
    <section>
    <h4>SHOP {Props.categoryName ? Props.categoryName?.toUpperCase() : 'ALL' }</h4>
    <div className="item-grid">
    {Props.products?.map((e:Product, i:number) => (
        <div className={`product ${e.images.length > 1 ? 'withalt' : ''} ${e.new ? 'new' : ''} ${e.bestSeller ? 'best-seller' : ''}`} key={i}>
            <div>
              <a href={`./product/${i}`}>
                <img src={require(`../img/products/${e.images[0]}`)} alt={e.name} className="product-img"/>
                {e.images.length > 1 ? <img src={require(`../img/products/${e.images[1]}`)} className="alternative" alt={e.name}/> : null}
                <p>{e.name}</p>                
                {e.discount ? <p className="price"><span className="old-price">£{e.price}</span> £{e.price - e.price * e.discount / 100}</p> : <p className="price">£{e.price}</p>} 
              </a>     
                <button className="button" onClick={() => Props.addItemToCart(i)}>Add to Cart</button>
            </div>
        </div>



    ))}
    </div>
  </section>
  );
};

interface MainProps {
  addItemToCart: (i:number) => void,
}

const Shop: React.FC<MainProps> = (MainProps) => {
  const { category } = useParams();
  const catId: number = categories.findIndex((e:Category) => e.name === category);
  let productsFiltered: Product[] = [];
  let catTitle = '';
  let catDesc = '';
  if (catId >= 0) {
    catTitle = categories[catId].heroTitle; 
    catDesc = categories[catId].heroDesc;
    productsFiltered = products.filter((e:Product) => e.cat === catId);
  } else {
    productsFiltered = products;
  }
  return (
        <main>
            <ShopHero heroTitle={catTitle} heroDesc={catDesc} catName={category?.toLowerCase()}/>
            <ShopProducts products={productsFiltered} categoryName={category} addItemToCart={MainProps.addItemToCart}/>
        </main>
  );
};

export default Shop;
