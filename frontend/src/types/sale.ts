import { Seller } from "./seller"

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller
}

export type salePage = {
    content?: Sale[],
    last: boolean,
    totalElements: number,
    totalPages: number,
    size?: number,
    number: number,
    first: boolean,
    numberOfElements?: number,
    empty?: boolean
}
export type SaleSum = {
    sellerName: string,
    saleAllSum: number
}

export type saleSuccess = {
    sellerName: string,
    visited: number,
    deals: number
}