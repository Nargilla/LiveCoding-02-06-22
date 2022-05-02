import { IBook } from "./book.model";

export const BOOKS: IBook[] = [
    {
        id:'1',
        title: 'Game of thrones',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/A12tbaSby+L.jpg',
        author: {name: 'George R.R.', surname: 'Martin'}
    },
    {
        id:'2',
        title: 'Harry Potter',
        cover: 'https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg',
        author: {name: 'J.K', surname: 'Rowling'}
    },
    {
        id:'3',
        title: 'Le cronache di Narnia',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51WbmTRk-4L.jpg',
        author: {name: 'C.S.', surname: 'Lewis'}
    }
]