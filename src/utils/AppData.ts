
export interface IProduct {
    _id?: number
    name: string
    price: number
    image: string
    category: string
    stock: number
}

export interface ICartItem {
    _id?: number
    name: string
    price: number
    image: string
    category: string
    quantity: number
    stock: number
}

export const productsList:IProduct[] = [
    // {name: 'Lenovo G3', price: 20999, image: 'https://m.media-amazon.com/images/I/516F3sfYp4L.__AC_SY300_SX300_QL70_ML2_.jpg',category: 'laptop',stock: 20},
    // {name: 'MacBook Air M2', price: 30099, image: 'https://m.media-amazon.com/images/I/51D9YY8bYBL._AC_SL1500_.jpg', category: 'laptop',stock: 20 },
    // {name: 'HP Victus', price: 40099, image: 'https://m.media-amazon.com/images/I/81uTW77d3rL._AC_SL1500_.jpg', category: 'laptop',stock: 20 },
    // {name: 'HP Gaming', price: 510099, image: 'https://m.media-amazon.com/images/I/71wA1a1vMiL.__AC_SY300_SX300_QL70_ML2_.jpg', category: 'laptop',stock: 20 },
    // {name: 'Iphone 14 case', price: 399, image: 'https://m.media-amazon.com/images/I/51YznTRC0DL._AC_SL1024_.jpg', category: 'cover',stock: 20 },
    // {name: 'Samsung M33', price: 12669, image: 'https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UL320_.jpg', category: 'mobile',stock: 20 },
    // {name: 'cardoO watch', price: 60399, image: 'https://m.media-amazon.com/images/I/61YVAmm96CL._AC_UL320_.jpg', category: 'smart watch',stock: 20 },
    // {name: 'joyroom pro', price: 70099, image: 'https://m.media-amazon.com/images/I/61dEMVpJpJL._AC_SL1500_.jpg', category: 'smart watch',stock: 20 },
]

