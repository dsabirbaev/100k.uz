
type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};


export interface IProducts {
    id: number,
    img:   StaticImageData,
    name: string,
    price: string,
    order: string
}


export interface ICardProps {
    data: IProducts;
}
