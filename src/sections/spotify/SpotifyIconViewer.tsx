import React, { useState } from 'react';
import { Album, Song, Artist, Playlist, JustGoodPlaylist, SpotifyItem, SpotifyItemType } from './types';
import { newTab } from '../../helper';
import test from '../../images/test.jpg';

type Props = {
  type: SpotifyItemType;
  items: SpotifyItem[];
};

type IconProps = {
  artist: string | null;
  img: string;
  name: string;
  url: string;
}

const getFrameURL = (url: string) => {
  const s = url.split('/');
  s.splice(3, 0, "embed");
  return s.join('/');
}

const SpotifyIcon = ({ artist, img, name, url }: IconProps) => {
  const [iframeOpen, setIframeOpen] = useState(false);

  return (
    <div className="above spotify-icon">
      <a onClick={() => setIframeOpen(o => !o)}>
        <img
          className="above spotify-icon-img"
          src={img}
          alt={`${name} ${artist && 'by ' + artist}`}
        />
      </a>
      <div className="spotify-sub-icon">
        { iframeOpen ? (
          <iframe
            // src="https://open.spotify.com/embed?uri=spotify:album:1DFixLWuPkv3KT3TnV35m3"
            src={getFrameURL(url)}
            className="spotify-iframe"
            // width="300"
            // height="380"
            frameBorder="0"
            // allowTransparency={true}
            allow="encrypted-media"
          />
        ) : (
          <>
            <p className={`above spotify-icon-name`}> {name} </p>
            { artist && (
              <p className="above spotify-icon-artist"> by {artist} </p>
            )}
          </>
        )}
      </div>
    </div>
  )
};

const SpotifyIconViewer = <T extends SpotifyItem>({ type, items }: Props) => {
  return (
    <div className={`spotify-${type}-icon-viewer`}>
      {items.map((item) => {
        const artist = (type === "album" || type === "song") ? ((item as (Album | Song)).artist) : null;
        const s = item.url.split('/');
        s.splice(3, 0, "embed");
        const iframeUrl = s.join('/');
        // const id = s[s.length - 1];
        // const iframeUrl = `https://open.spotify.com/embed?uri=spotify:${type}:${id}`;
        return (
          <SpotifyIcon artist={artist} img={item.img} name={item.name} url={item.url} />
          // <div className="above spotify-icon">
          //   <a href={item.url} {...newTab} >
          //     <img className="above spotify-icon-img" src={item.img} alt={`${item.name} ${artist && 'by ' + artist}`} />
          //   </a>
          //   <iframe
          //     // src="https://open.spotify.com/embed?uri=spotify:album:1DFixLWuPkv3KT3TnV35m3"
          //     src={iframeUrl}
          //     className="spotify-iframe"
          //     // width="300"
          //     // height="380"
          //     frameBorder="0"
          //     allowTransparency={true}
          //     allow="encrypted-media"
          //   />
          //   <p className={`above spotify-icon-name`}> {item.name} </p>
          //   { artist && (
          //     <p className="above spotify-icon-artist"> by {artist} </p>
          //   )}
          // </div>
        );
      })}
    </div>
  );
};

export default SpotifyIconViewer;
