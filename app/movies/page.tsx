import { Suspense } from 'react'
import { genPageMetadata } from '~/app/seo'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { PageHeader } from '~/components/ui/page-header'
import { SITE_METADATA } from '~/data/site-metadata'
import { getAllMovies } from '~/db/queries'
import type { SelectMovie } from '~/db/schema'
import { getMoviesFromJson } from '~/utils/fallback-books-movies'
import { MoviesList } from './movies-list'

export let metadata = genPageMetadata({ title: 'My movies list' })

export default async function MoviesPage() {
  let movies = await getAllMovies().catch(() => [] as SelectMovie[])
  if (movies.length === 0) {
    movies = getMoviesFromJson()
  }

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Movies"
        description={
          <>
            <p>
              This is where I log all the movies and TV series I’ve watched. I’m
              a huge fan of <span className="font-medium">Tom Hanks</span> and{' '}
              <span className="font-medium">Christopher Nolan</span>, so expect
              to see a lot of them in the top spots! Anything I’ve rated 10
              stars is something I absolutely love and have probably rewatched
              many times (highly recommended). Take a look and maybe find your
              next favorite film!
            </p>
            <p className="mt-3 italic">
              *Data is automatically synced from my{' '}
              <Link href={SITE_METADATA.letterboxd} className="font-medium">
                <GrowingUnderline data-umami-event="letterboxd-feed" active>
                  Letterboxd profile
                </GrowingUnderline>
              </Link>
              , with extra details enriched from the{' '}
              <Link href="https://www.omdbapi.com/" className="font-medium">
                <GrowingUnderline data-umami-event="omdb-api" active>
                  OMDB API
                </GrowingUnderline>
              </Link>{' '}
              to provide a rich view of each film.
            </p>
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-5 md:py-10">
        <Suspense>
          <MoviesList movies={movies} />
        </Suspense>
      </div>
    </Container>
  )
}
