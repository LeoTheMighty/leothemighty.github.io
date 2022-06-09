import React from 'react';
import { Album, Song, Artist, Playlist, JustGoodPlaylist, SpotifyItem, SpotifyItemType } from './types';
import { newTab } from '../../helper';
import test from '../../images/test.jpg';

type Props = {
  type: SpotifyItemType;
  items: SpotifyItem[];
};

const SpotifyIconViewer = <T extends SpotifyItem>({ type, items }: Props) => {
  return (
    <div className={`spotify-${type}-icon-viewer`}>
      {items.map((item) => {
        const artist = (type === "album" || type === "song") ? ((item as (Album | Song)).artist) : null;
        return (
          <div className="above spotify-icon">
            <a href={item.url} {...newTab} >
              <img className="above spotify-icon-img" src={item.img} alt={`${item.name} ${artist && 'by ' + artist}`} />
            </a>
            <p className={`above spotify-icon-name`}> {item.name} </p>
            { artist && (
              <p className="above spotify-icon-artist"> by {artist} </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SpotifyIconViewer;
