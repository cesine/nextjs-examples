export interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  description: string;
  category: string;
  hasStock: boolean;
}

export interface Tweet extends Record<any, any> {

}