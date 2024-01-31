
export interface Product {
    id: number
    name: string
    price: number
    image: string
    category?: string
    quantity: number | 1
}

export const productsList:Product[] = [
    {id: 1, name: 'Lenovo G3', price: 20999, image: 'https://m.media-amazon.com/images/I/516F3sfYp4L.__AC_SY300_SX300_QL70_ML2_.jpg',category: 'laptop',quantity: 20},
    {id: 2, name: 'MacBook Air M2', price: 30099, image: 'https://m.media-amazon.com/images/I/51D9YY8bYBL._AC_SL1500_.jpg', category: 'laptop',quantity: 20 },
    {id: 3, name: 'HP Victus', price: 40099, image: 'https://m.media-amazon.com/images/I/81uTW77d3rL._AC_SL1500_.jpg', category: 'laptop',quantity: 20 },
    {id: 4, name: 'HP Gaming', price: 510099, image: 'https://m.media-amazon.com/images/I/71wA1a1vMiL.__AC_SY300_SX300_QL70_ML2_.jpg', category: 'laptop',quantity: 20 },
    {id: 5, name: 'Iphone 14 case', price: 399, image: 'https://m.media-amazon.com/images/I/51YznTRC0DL._AC_SL1024_.jpg', category: 'cover',quantity: 20 },
    {id: 6, name: 'Samsung M33', price: 12669, image: 'https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UL320_.jpg', category: 'mobile',quantity: 20 },
    {id: 7, name: 'cardoO watch', price: 60399, image: 'https://m.media-amazon.com/images/I/61YVAmm96CL._AC_UL320_.jpg', category: 'smart watch',quantity: 20 },
    {id: 8, name: 'joyroom pro', price: 70099, image: 'https://m.media-amazon.com/images/I/61dEMVpJpJL._AC_SL1500_.jpg', category: 'smart watch',quantity: 20 },
]

