export interface SpotifyItem {
  name: string;
  img: string;
  url: string;
}

export type SpotifyItemType = "album" | "song" | "artist" | "playlist" | "just_good_playlist";

export interface Album extends SpotifyItem {
  artist: string;
}

export interface Song extends SpotifyItem {
  artist: string;
}

export interface Artist extends SpotifyItem {}

export interface Playlist extends SpotifyItem {}

export interface JustGoodPlaylist extends SpotifyItem {
  description: string;
}
