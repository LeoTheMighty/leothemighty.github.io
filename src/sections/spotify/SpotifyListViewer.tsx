
import React from 'react';
import { Album, Song, Artist, Playlist, JustGoodPlaylist, SpotifyItem } from './types';
import { newTab } from '../../helper';
import test from '../../images/test.jpg';

/*

 [ name | artist |
 [


 */

type Props = {
  type: "album" | "song" | "artist" | "playlist" | "just_good_playlist";
  items: SpotifyItem[];
};

const SpotifyListViewer = <T extends SpotifyItem>({ type, items }: Props) => {
  return (
    <div className={`spotify-${type}-list-viewer`}>
      {items.map((item) => {
        const artist = (type === "album" || type === "song") ? ((item as (Album | Song)).artist) : null;
        return (
          <div className="above spotify-list-item">
            <a href={item.url} {...newTab} >
            </a>
            <p className={`above spotify-list-item-name`}> {item.name} </p>
            { artist && (
              <p className="above spotify-list-item-artist"> by {artist} </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SpotifyListViewer;
