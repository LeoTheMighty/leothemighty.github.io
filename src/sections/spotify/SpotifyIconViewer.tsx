import React from 'react';
import { Album, Song, Artist, Playlist, JustGoodPlaylist, SpotifyItem } from './types';
import { newTab } from '../../helper';
import test from '../../images/test.jpg';

type Props = {
  type: "album" | "song" | "artist" | "playlist" | "just_good_playlist";
  items: SpotifyItem[];
};

const SpotifyIconViewer = <T extends SpotifyItem>({ type, items }: Props) => {
  return (
    <div className={`${type}-icon-viewer`}>
      {items.map((item) => {
        const artist = (type === "album" || type === "song") ? ((item as (Album | Song)).artist) : null;
        return (
          <div className="above album">
            <a href={item.url} {...newTab} >
              <img className="above album-img" src={test} alt={`${item.name} ${artist && 'by ' + artist}`}/>
            </a>
            <p className="above album-title"> {item.name} </p>
            { artist && (
              <p className="above album-artist"> by {artist} </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SpotifyIconViewer;
