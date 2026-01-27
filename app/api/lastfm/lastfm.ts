import type { NowPlayingData, RecentlyPlayedData } from '~/types/data'

const LASTFM_API_URL = 'https://ws.audioscrobbler.com/2.0/'

let { LASTFM_API_KEY: apiKey, LASTFM_USERNAME: username } = process.env

type LastfmTrack = {
  name: string
  artist: {
    '#text': string
  }
  album: {
    '#text': string
  }
  image: Array<{
    size: string
    '#text': string
  }>
  url: string
  date?: {
    uts: string
  }
  '@attr'?: {
    nowplaying: string
  }
}

type LastfmResponse = {
  recenttracks: {
    track: LastfmTrack[]
  }
}

async function getRecentTracks(): Promise<LastfmResponse | null> {
  try {
    const url = new URL(LASTFM_API_URL)
    url.searchParams.append('method', 'user.getrecenttracks')
    url.searchParams.append('user', username || '')
    url.searchParams.append('api_key', apiKey || '')
    url.searchParams.append('format', 'json')
    url.searchParams.append('limit', '2')

    const response = await fetch(url.toString(), {
      cache: 'no-store',
    })

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching Last.fm data:', error)
    return null
  }
}

export async function getNowPlaying(): Promise<NowPlayingData> {
  try {
    const data = await getRecentTracks()

    if (!data || !data.recenttracks?.track?.length) {
      return { ok: false, error: 'No tracks found.' }
    }

    const tracks = data.recenttracks.track
    const nowPlayingTrack = tracks.find(
      (track) => track['@attr']?.nowplaying === 'true',
    )

    if (nowPlayingTrack) {
      return {
        ok: true,
        song: {
          title: nowPlayingTrack.name,
          artist: nowPlayingTrack.artist['#text'],
          album: nowPlayingTrack.album['#text'],
          albumImageUrl:
            nowPlayingTrack.image.find((img) => img.size === 'large')?.[
              '#text'
            ] ||
            nowPlayingTrack.image[nowPlayingTrack.image.length - 1]?.[
              '#text'
            ] ||
            '',
          songUrl: nowPlayingTrack.url,
        },
      }
    }

    return { ok: false, error: 'No currently playing track found.' }
  } catch (error) {
    console.error('Error fetching currently playing track:', error)
    return {
      ok: false,
      error: error?.message || error?.toString() || 'Unknown error',
    }
  }
}

export async function getRecentlyPlayed(): Promise<RecentlyPlayedData> {
  try {
    const data = await getRecentTracks()

    if (!data || !data.recenttracks?.track?.length) {
      return { ok: false, error: 'No tracks found.' }
    }

    const tracks = data.recenttracks.track
    // Get the most recent track that's not currently playing
    const recentTrack =
      tracks.find(
        (track) => track['@attr']?.nowplaying !== 'true' && track.date,
      ) || tracks[0]

    if (recentTrack) {
      return {
        ok: true,
        song: {
          playedAt: recentTrack.date?.uts
            ? new Date(Number(recentTrack.date.uts) * 1000).toISOString()
            : new Date().toISOString(),
          title: recentTrack.name,
          artist: recentTrack.artist['#text'],
          album: recentTrack.album['#text'],
          albumImageUrl:
            recentTrack.image.find((img) => img.size === 'large')?.['#text'] ||
            recentTrack.image[recentTrack.image.length - 1]?.['#text'] ||
            '',
          songUrl: recentTrack.url,
        },
      }
    }

    return { ok: false, error: 'No recently played tracks found.' }
  } catch (error) {
    console.error('Error fetching recently played tracks:', error)
    return {
      ok: false,
      error: error?.message || error?.toString() || 'Unknown error',
    }
  }
}
