export interface Album {
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
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