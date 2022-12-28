
/*---------- I N T E R F A C E S ----------*/
export interface interfaceProducts {
    id: number;
    date?: Date;
    title: string;
    brand: string;
    price: number;
    color: string;
    imagemp: string;
}

export interface interfacePayment {
    total: number;
    moneyQtdy: number[];
    money: number[];
    quantity: number;
}