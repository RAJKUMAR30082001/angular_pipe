export interface BookInterface {
    bookName:string
    author:string,
    journal:string
    Price?:number
}

export interface bookPrice{
   [key:string]:number
}