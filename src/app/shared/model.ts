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
}

export type Template = {
    Name: string
    Value: number
    Icon: string
}

type SourceValue = {
    Source: string
    Value: string
}

export type SearchFilter = {
    //Name?: string
    Page?: number
    ID?: string
    ApiKey?: string
    Language?: string
    Query?: string
}