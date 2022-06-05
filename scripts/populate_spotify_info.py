# write to ../src/files/albums.json
import json
from spotify_helper import SpotifyHelper, get_artists_string

FAVORITE_ALBUMS_ID = ""
TOP_TRACKS_LIMIT = 100 #TODO ? not sure what the last few of these will be
TOP_ARTISTS_LIMIT = 100 #TODO ?

"""
The spotify info we want to add is as follows in this order:

1. albums.json
  - Fetch the list of albums from my favorite albums playlist
  - Contains a list of objects in this format:

```json
{
    "name":   "Album name",
    "img":    "Album artwork image url",
    "artist": "Album Artist name"
    "url":    "Album external spotify url"
}
```

   - Should be sorted in order of the playlist. Or popularity?

2. songs.json (using `current_user_top_tracks`)

```json
{
    "name":   "Song name",
    "img":    "Album Artwork image url",
    "artist": "Album Artist name",
    "url":    "Song external spotify url"
}
```

3. artists.json (using `current_user_top_artists`)

```json
{
    "name":   "Artist name",
    "img":    "Artist image url",
    "url":    "Artist external spotify url"
}
```

4. albums_popular.json (albums.json sorted by popularity (get average of track popularities in ))
5. songs_popular.json (songs.json sorted by popularity (easy with Spotify's API))
6. artists_popular.json (artists.json sorted by popularity (easy with Spotify's API))
7. we_playlists.json

```json
{
    "name": "playlist name",
    "img" : "playlist image url",
    "url" : "playlist external url"
}
```

8. just_good_artists.json (display just good playlists with artist images)

```json
{
    "artist": "artist name",
    "img" : "artist image url",
    "url" : "just good playlist external url",
    "description": "just good playlist description"
}
```

"""

class Album:
    def __init__(self, track):
        self.__init__(
            track["album"]["name"],
            track["album"]["images"][0]["url"],
            get_artists_string(track["artists"]),
            track["album"]["external_url"]["spotify"],
        )

    def __init__(self, name, img, artist, url):
        self.name = name
        self.img = img
        self.artist = artist
        self.url = url

    def to_json(self):
        return {
            "name": self.name,
            "img": self.img,
            "artist": self.artist,
            "url": self.url
        }

class Artist:
    def __init__(self, track):
        self.__init__(track["artists"][0])

    def __init__(self, artist):
        self.__init__(
            get_artists_string(artist["name"]),
            artist["images"][0]["url"],
            artist["external_urls"]["spotify"]
        )

    def __init__(self, name, img, url):
        self.name = name
        self.img = img
        self.url = url

    def to_json(self):
        return {
            "name": self.name,
            "img": self.img,
            "url": self.url
        }

class Song:
    def __init__(self, track):
        self.__init__(
            track["name"],
            get_artists_string(track["artists"]),
            track["album"]["images"][0]["url"],
            track["external_urls"]["spotify"]
        )

    def __init__(self, name, artist, album_img, url):
        self.name = name
        self.artist = artist
        self.album_img = album_img
        self.url = url

    def to_json(self):
        return {
            "name": self.name,
            "artist": self.artist,
            "img": self.album_img,
            "url": self.url
        }

class Playlist:
    def __init__(self, playlist):
        self.__init__( # TODO BIG QUESTION MARKS HERE!!!
            playlist["name"],
            playlist["image_urls"][0], # TODO: HOW DO YOU GET THE PLAYLIST URL, DOES IT COME FOR FREE??????
            playlist["external_url"]
        )

    def __init__(self, name, img, url):
        self.name = name
        self.img = img
        self.url = url

    def to_json(self):
        return {
            "name": self.name,
            "img": self.img,
            "url": self.url
        }


# def sort_on_most_listened_to():
    # return None

# def get_album_info():
    # return None

def get_albums_from_playlist(playlist_id):
    """
    From the track IDs of the tracks that represent the albums,
    return the pertinent information for them.

    Returns:

    """

    albums = []

    def handle_track(track):
        albums.append(Album(track).to_json)
        # albums.append({
        #     "name": track["album"]["name"],
        #     "img": track["album"]["images"][0]["url"],
        #     "artist": get_artists_string(track["artists"]),
        #     "url": track["album"]["external_url"]["spotify"],
        # })
    
    sp.handle_all_playlist_tracks(playlist_id, handle_track)
    
    return albums

if __name__ == "__main__":
    sp = SpotifyHelper()

    albums = get_albums_from_playlist(FAVORITE_ALBUMS_ID)

    with open('../src/files/albums.json', 'w', encoding='utf-8') as f:
        json.dump(albums, f, ensure_ascii=False, indent=4)
