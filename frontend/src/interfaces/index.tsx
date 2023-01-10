/*---------- I N T E R F A C E S ----------*/
export interface interfaceProducts {
  /* id: number; */
  date?: Date;
  title: string;
  brand: string;
  price: number;
  color: string;
  images: string;
}

export interface interfaceForm {
  title: string;
  brand: string;
  price: string;
  color: string;
  date: Date;
  images: string;
}

export interface interfacePayment {
  total: number;
  moneyQtdy: number[];
  money: number[];
  quantity: number;
}
