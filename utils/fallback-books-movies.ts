import fs from 'node:fs'
import path from 'node:path'
import type { SelectBook, SelectMovie } from '~/db/schema'

type JsonBook = {
  book_id?: string
  guid: string
  pubDate: string
  title: string
  link: string
  book_image_url: string
  book_small_image_url: string
  book_medium_image_url: string
  book_large_image_url: string
  book_description: string
  author_name: string
  isbn?: string
  user_name: string
  user_rating: string
  user_read_at?: string
  user_date_added: string
  user_date_created: string
  user_shelves?: string
  user_review?: string
  average_rating: string
  book_published?: string
  content: string
  numPages?: number
}

type JsonMovie = {
  const: string
  your_rating: string
  date_rated: string
  title: string
  original_title: string
  url: string
  title_type: string
  imdb_rating: string
  runtime: string
  year?: string
  genres: string
  num_votes: string
  release_date: string
  directors: string
  actors: string
  plot: string
  poster: string
  language: string
  country: string
  awards: string
  box_office?: string
  total_seasons?: string
  ratings: Array<{ source: string; value: string }>
}

function mapJsonBookToSelectBook(raw: JsonBook): SelectBook {
  let now = new Date()
  return {
    id: raw.book_id ?? raw.guid,
    guid: raw.guid,
    pubDate: raw.pubDate,
    title: raw.title,
    link: raw.link,
    bookImageUrl: raw.book_image_url,
    bookSmallImageUrl: raw.book_small_image_url,
    bookMediumImageUrl: raw.book_medium_image_url,
    bookLargeImageUrl: raw.book_large_image_url,
    bookDescription: raw.book_description,
    authorName: raw.author_name,
    isbn: raw.isbn ?? null,
    userName: raw.user_name,
    userRating: raw.user_rating,
    userReadAt: raw.user_read_at ?? null,
    userDateAdded: raw.user_date_added,
    userDateCreated: raw.user_date_created,
    userShelves: raw.user_shelves ?? null,
    userReview: raw.user_review ?? null,
    averageRating: raw.average_rating,
    bookPublished: raw.book_published ?? null,
    content: raw.content,
    numPages: raw.numPages ?? null,
    createdAt: now,
    updatedAt: now,
  }
}

function mapJsonMovieToSelectMovie(raw: JsonMovie): SelectMovie {
  let now = new Date()
  return {
    id: raw.const,
    yourRating: raw.your_rating,
    dateRated: raw.date_rated,
    title: raw.title,
    originalTitle: raw.original_title,
    url: raw.url,
    titleType: raw.title_type,
    imdbRating: raw.imdb_rating,
    runtime: raw.runtime,
    year: raw.year ?? null,
    genres: raw.genres,
    numVotes: raw.num_votes,
    releaseDate: raw.release_date,
    directors: raw.directors,
    actors: raw.actors,
    plot: raw.plot,
    poster: raw.poster,
    language: raw.language,
    country: raw.country,
    awards: raw.awards,
    boxOffice: raw.box_office ?? null,
    totalSeasons: raw.total_seasons ?? null,
    ratings: raw.ratings,
    createdAt: now,
    updatedAt: now,
  }
}

export function getBooksFromJson(): SelectBook[] {
  try {
    let filePath = path.join(process.cwd(), 'json', 'books.json')
    if (!fs.existsSync(filePath)) return []
    let content = fs.readFileSync(filePath, 'utf-8')
    let raw = JSON.parse(content) as JsonBook[]
    if (!Array.isArray(raw)) return []
    return raw.map(mapJsonBookToSelectBook)
  } catch {
    return []
  }
}

export function getMoviesFromJson(): SelectMovie[] {
  try {
    let filePath = path.join(process.cwd(), 'json', 'movies.json')
    if (!fs.existsSync(filePath)) return []
    let content = fs.readFileSync(filePath, 'utf-8')
    let raw = JSON.parse(content) as JsonMovie[]
    if (!Array.isArray(raw)) return []
    return raw.map(mapJsonMovieToSelectMovie)
  } catch {
    return []
  }
}
