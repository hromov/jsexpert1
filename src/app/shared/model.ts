export type Film = {
    Actors?: string
    Awards?: string
    BoxOffice?: string
    Country?: string
    DVD?: string
    Director?: string
    Genre?: string
    Language?: string
    Metascore?: string
    Plot?: string
    Poster?: string
    Production?: string
    Ratings?: Array<SourceValue>
    Released?: string
    Response?: string
    Runtime?: string
    Title?: string
    Website?: string
    Writer?: string
    Year?: string
    imdbID?: string
    imdbRating?: string
    imdbVotes?: string

}

type SourceValue = {
    Source: string
    Value: string
}