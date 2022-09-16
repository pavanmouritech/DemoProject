export interface Album {
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
    image:string;
    description:string;
    category:string;
    price:string;
}

export type AlbumInfo ={
    albumRequestPayload?: AlbumRequesetPayload;
    isLoading : boolean;
    album ?: Album;
    albumResponseError ?: AlbumResponseError;
}
export type AlbumRequesetPayload={
    id:number;
}
export type AlbumResponseError ={
    error:string;
}