export default interface IProduct {
  product?: IProduct;
  _id: string;
  categories: [];
  description: string;
  image: string;
  inStock: number;
  price: number;
  title: string;
  quantity?: number;
}
