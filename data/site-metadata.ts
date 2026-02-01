export const SITE_METADATA = {
  title: 'Logesh C – portfolio & blog',
  author: 'Logesh C',
  headerTitle: 'Logesh C',
  description:
    'MBA graduate skilled in customer relationship management, digital transformation, and data-driven operations. Portfolio and blog.',
  language: 'en-us',
  locale: 'en-US',
  stickyNav: true,
  theme: 'system', // system, dark or light
  siteUrl: 'https://logeshc.com',
  siteRepo: 'https://github.com/yourusername/logesh-blog', // TODO: your repo URL after you push
  refParam: 'logeshc.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'logeshc17@gmail.com',
  github: 'https://github.com/yourusername', // TODO: add if you have one
  x: 'https://x.com/yourusername',
  facebook: 'https://facebook.com/yourusername',
  youtube: 'https://www.youtube.com/@yourusername',
  linkedin: 'https://www.linkedin.com/in/logeshchenniappan/',
  threads: 'https://www.threads.net/yourusername',
  instagram: 'https://www.instagram.com/yourusername',
  lastfm: 'https://www.last.fm/user/yourusername',
  letterboxd: 'https://letterboxd.com/yourusername',
  goodreadsBookshelfUrl: 'https://www.goodreads.com/user/show/YOUR_ID',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/YOUR_ID',
  imdbRatingsList: 'https://www.imdb.com/user/urYOUR_ID/ratings/?view=grid',
  role: 'MBA | Business & Data Analytics',
  location: 'India',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: '',
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/yourusername',
    paypal: 'https://paypal.me/yourusername',
    kofi: 'https://ko-fi.com/yourusername',
  },
}
