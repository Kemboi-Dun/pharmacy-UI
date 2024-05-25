export type imageObj_type = {
  imageURL: string;
  label: string;
};

export type productDealObj_type = {
  productURL: string;
  category: string;
  product_name: string;
  product_price: number;
  product_discount: number;
  product_rating: number;
};

export type brandObj_type = {
  brandURL: string;
  brand_name: string;
};

export type trendingProductObj_type = {
  productURL: string;
  category: string;
  product_name: string;
  product_price: number;
  product_discount: number;
  product_rating: number;
};

export type babyProductObj_type = {
  productURL: string;
  category: string;
  product_name: string;
  product_price: number;
  product_discount: number;
  product_rating: number;
};

export type flavorType = {
  id:number;
  header: string;
  title: string;
  description: string;
  benefits: string[];
  price: number;
  productImgURL: string;
};
