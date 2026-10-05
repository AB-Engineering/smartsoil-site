// The hero pot is public/img/hero-pot.png, from Freepik (free licence, attribution shown under the photo and in the
// footer): https://it.freepik.com/foto-vettori-gratuito/vasi-con-piante
// The other photos: Unsplash, hotlinked from their CDN (licence: free to use, credit appreciated), resized by
// query string. To swap one: a new id here, or a file under public/ with its own URL. ponytail: own photos of real
// pilot sites should replace these before the launch.
const U = (id: string, w: number): string => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  hero: U("1777732633692-8520bf23c6d8", 2000),       // modern atrium with plants
  why: U("1781187043477-289e7948e8b6", 1600),        // stacked terracotta pots in a greenhouse
  quote: U("1761971975065-8e1fcf101303", 2000),      // interior green wall
  indoor: U("1768472867331-a6f2426debaa", 1200),     // atrium with hanging plants and skylight
  nursery: U("1785964165816-95e058839a26", 1200),    // pots on metal tables in a sunlit nursery
  research: U("1627674358849-41ac471e5df5", 1200),   // rows of black pots in a greenhouse
  rooftop: U("1769690093863-4f2a3fd17dd2", 1200),    // rooftop garden over a city skyline
  pilot: U("1776151242710-97daf0839f63", 2000),      // bright greenhouse with a bench
};

export const CREDITS = ["szczehoo", "joseph_royer", "erandesign", "birdjj36", "alexlightart", "crystalweed", "tanyabarrow", "anniespratt"];
