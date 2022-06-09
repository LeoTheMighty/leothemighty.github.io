export interface SpotifyItem {
  name: string;
  img: string;
  url: string;
}

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

// view type

// export type
export type SpotifyType = {
  view: SpotifyViewType;
  item: SpotifyItemType;
};

export type SpotifyViewType = "icon" | "list";

export type SpotifyItemType = "album" | "song" | "artist" | "playlist" | "just_good_playlist";
