export interface ProductCategoriesTypes {
    id:       string;
    category: string;
    img:      string;
    porducts: Porducts[];
}

export interface Porducts {
    id:       string;
    title:    string;
    subTitle: string;
    img:      string;
    price:    number;
}
