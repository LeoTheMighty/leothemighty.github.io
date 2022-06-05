import React, { useEffect, useState } from 'react';
import albums from '../files/albums.json';
import test from '../images/test.jpg';
import { newTab } from '../helper';
import links from '../links';
import SpotifyIconViewer from './spotify/SpotifyIconViewer';

const NUM_ALBUMS_FETCH = 2;

type Album = {
  name: string;
  img: string;
  artist: string;
  url: string;
};

/*

This spotify component should allow you to choose a bunch of different options
for what part of my spotify Library to view

Let's make the Header for this component be the primary chooser, so it will be
a little dropdown that looks like a regular title.

So:

[ Leo's v ] [ Favorite v ]       [ Albums v  ] [ sorted by Popularity ]
[ Your ]    [ Most Listened to ] [ Songs     ] [ sorted by my most listened ]
                                 [ Artists   ] [ sorted by your most listened ]
                                 [ Playlists ] [ sorted randomly ]
                                 [ Shows (Podcasts) ]
            [ Followed Artists ]
            [ Most Popular Playlists ]
            [ What Spotify recommends Leo listen to ]

Leo's
  * favorite
    * albums
    * songs
    * artists
      * Short Term
      * Medium Term
      * Long Term
    * playlists (change ^ to "Best?")
    * podcasts
  * most listened to
    * tracks
    * artists
  * recently listened to
    * tracks
  * Just Good Playlists
  * "We" Playlists
  * Total
    * Liked Songs
    * Playlists

My Favorite Albums (+)
My Favorite Songs (Short Term)
My Favorite Songs (Medium Term)
My Favorite Songs (Long Term)
My Favorite Artists (Short Term)
My Favorite Artists (Medium Term)
My Favorite Artists (Long Term)
My Favorite Songs (Short Term) Sorted by Popularity
My Favorite Songs (Medium Term) Sorted by Popularity
My Favorite Songs (Long Term) Sorted by Popularity
My Favorite Artists (Short Term) Sorted by Popularity
My Favorite Artists (Medium Term) Sorted by Popularity
My Favorite Artists (Long Term) Sorted by Popularity
My We Suite Playlists
My Just Good Playlists

  * Would be cool to see "What Leo is listening to right now" lol. Require using JS spotify api though

Let's make this a grid of album art, where each image is the album art
and the caption is the name.

We could also have a little icon for choosing how to display this
* Icons
* Detail List (Can you get close to Spotify UX? Might be fun to try to duplicate their styling.)

# TODO HIGH LEVEL IDEA

Could make a fully-fledged spotify viewer (like multiple pages that can see playlists).
Although that would either require a lot of static files,
a backend (that also has a lot of static files on it), or using a Javascript spotify library. This
would also require either having the user sign into their spotify account or storing my own creds somewhere.

This last thing is absolutely worth looking into. Wouldn't be too bad, just a whole lot of re-implemented
code. Unless I created a backend for this service lmao. Oh jeez but then where tf would I store that bad boy.
I am not currently thinking about backends as I will not spend money until I get myself a fuckin' raise.

 */


/**
 * Fetch the next albums to show.
 *
 * @param index
 */
const getNextAlbums = (index: number):  Album[] => {
  return albums.slice(index, index + NUM_ALBUMS_FETCH);
};

const getAlbumComponents = (albums: Album[]): JSX.Element[] => {
  const albumComps: JSX.Element[] = [];
  for (let i = 0; i < albums.length; i++) {
    const { img, name, artist, url } = albums[i];
    albumComps.push(
      <div className="above album">
        <a href={url} {...newTab} >
          <img className="above album-img" src={test} alt={`${name} by ${artist}`}/>
        </a>
        <p className="above album-title"> {name} </p>
        <p className="above album-artist"> by {artist} </p>
      </div>
    );
  }
  return albumComps;
};

const Spotify = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [viewType, setViewType] = useState<"icon" | "list">("icon");

  const [albumComps, setAlbumComps] = useState<JSX.Element[]>([]);

  const loadMore = () => setAlbumComps(c => c.concat(getAlbumComponents(getNextAlbums(c.length))));

  // initial
  useEffect(loadMore, []);

  return (
    <div className="spotify">
      <header>
        <div>

        </div>
        <h2 className="above">
          My Favorite Albums
        </h2>
        <div>

        </div>
      </header>
      <div className="albums">
      <SpotifyIconViewer type="album" items={} />
        { albumComps }
      </div>
      <div>
        <button // TODO: THIS LOOKS TRASH
          type="button"
          className="above btn btn-danger spotify-load-more"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <a href={links.spotifyDeveloper} className="above spotify-api-link" {...newTab}>
          <i className="bi-spotify inline-icon" />
          Using Spotify's API
        </a>
      </div>
    </div>
  );
};

export default Spotify;
