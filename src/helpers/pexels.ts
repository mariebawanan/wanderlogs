import { createClient } from 'pexels';

const pexelsClient = createClient(`${process.env.PEXELS_API_KEY}`);

const searchPexelPhoto = (query: string) =>
    pexelsClient.photos
        .search({ query: query, per_page: 1 })
        .then(({ photos }: any) => photos && photos[0].src.landscape);

export { searchPexelPhoto };
