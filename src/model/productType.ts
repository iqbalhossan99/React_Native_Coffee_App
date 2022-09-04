export interface ProductCategoriesTypes {
    id:       string;
    category: string;
    img:      string;
    porducts: PorductsTypes[];
}

export interface PorductsTypes {
    id:       string;
    title:    string;
    subTitle: string;
    img:      string;
    price:    number;
}
