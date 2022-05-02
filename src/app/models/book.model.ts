export interface IBook {
    id: string,
    title: string,
    cover: string,
    author: IAuthor,
}

export interface IAuthor{
    name: string,
    surname: string,
}
