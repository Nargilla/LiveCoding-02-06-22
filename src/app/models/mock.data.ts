import { IBook } from "./book.model";

export const BOOKS: IBook[] = [
    {
        id:'1',
        title: 'Game of thrones',
        cover:'https://images-na.ssl-images-amazon.com/images/I/A12tbaSby+L.jpg',
        author: {name: 'George R.R.', surname: 'Martin'}
    },
    {
        id:'2',
        title: 'Harry Potter e la pietra filosofale',
        cover:'https://images-na.ssl-images-amazon.com/images/I/51q5l-TtOUL._SX320_BO1,204,203,200_.jpg',
        author: {name: 'J.K.', surname: 'Rowling'}
    },
    {
        id:'3',
        title: 'Le cronache del mondo emerso',
        cover:'https://images-na.ssl-images-amazon.com/images/I/71qnIXWRrHL.jpg',
        author: {name: 'Licia', surname: 'Troisi'}
    }
]