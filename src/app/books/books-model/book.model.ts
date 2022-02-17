export interface Book {
  rank: number;
  title: string;
  author: string;
  description: string;
  book_image: string;
  amazon_product_url: string;
  url: string;
  primary_isbn10: string;
  publisher: string;
  price: number;
  buy_links: BuyLinks[];
}

export interface BuyLinks {
  name: string;
  url: string;
}
