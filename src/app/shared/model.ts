export type Film = {
    original_language?: string
    poster_path?: string
    release_date?: string
    revenue?: number
    runtime?: number
    status?: string
    title?: string
    homepage?: string
    imdb_id?: string
    vote_average?: number
    vote_count?: number
    id?: number
}

/*
export type Template = {
    Name: string
    Value: number
    Icon: string
}

type SourceValue = {
    Source: string
    Value: string
}
*/
export type SearchFilter = {
    //Name?: string
    Page?: number
    ID?: string
    ApiKey?: string
    Language?: string
    Query?: string
}

export type People = {
    adult?: boolean
    biography?: string
    birthday?: string
    deathday?: string
    gender?: number
    homepage?: string
    id?: number
    imdb_id?: string
    name?: string
    place_of_birth?: string
    popularity?: number
    profile_path?: string
    character?: string
    job?: string
}
/*
export type FavoriteDBModel = {
  filmId: string
  status: boolean
  _id: string
}
*/