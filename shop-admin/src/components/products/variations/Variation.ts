
export interface VariationItem{
    title:string
    value:string
}
export interface Variation{
    hash:string
    name:string
    title:string
    type:string
    items:VariationItem[]
}
