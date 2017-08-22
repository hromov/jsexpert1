export class Film {
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
    overview?: string
}
export class FilmList {
    total_pages: number
    results: Array<Film>
}