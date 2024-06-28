export interface IProduct {
    id: string;
    title: string;
    picture: string;
    price: IPrice;
    condition: string;
    free_shipping: boolean;
    description?: string;
}

interface IPrice {
    currency: string;
    amount: number;
    decimals: number;
}
