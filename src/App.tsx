import React, { useEffect, useRef, useState } from 'react';

import './styles/App.scss';
import Gallery from './sections/Gallery';
import useOnScreen from './hooks/UseOnScreen';
import useSlingScroll from './hooks/UseSlingScroll';
import { newTab } from './helper';
import { getRandomDescriptor } from './descriptor';
import links from './links';
import Projects from './sections/Projects';
import Profile from './sections/Profile';
import Resume from './sections/Resume';
import Spotify from './sections/spotify/Spotify';

const App = () => {
  const [descriptor, setDescriptor] = useState<string>(getRandomDescriptor());
  const [starsOn, setStarsOn] = useState(true);
  const [blobsOn, setBlobsOn] = useState(true);
  const [slingOn, setSlingOn] = useState(false);

  const galleryRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const resumeRef = useRef<null | HTMLDivElement>(null);
  const profileRef = useRef<null | HTMLDivElement>(null);
  const aocRef = useRef<null | HTMLDivElement>(null);
  const spotifyRef = useRef<null | HTMLDivElement>(null);

  const galleryVisible = useOnScreen(galleryRef);

  useSlingScroll(slingOn);

  const scrollTo = (dest: string) => {
    let ref = null;

    if (dest === "gallery") {
      ref = galleryRef;
    } else if (dest === "resume") {
      ref = resumeRef;
    } else if (dest === "projects") {
      ref = projectsRef;
    } else if (dest === "profile") {
      ref = profileRef;
    } else if (dest === "aoc") {
      ref = aocRef;
    } else if (dest === "music") {
      ref = spotifyRef;
    }

    ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overlay-container" onScroll={() => console.log('hello')}>
      { starsOn && (<div id="stars"><div /></div>) }
      { blobsOn && (<div id="blobs"><div /></div>) }
      <div className="App" onScroll={() => console.log('hello')}>
        <div className="d-flex separator">
          <div className="col d-flex justify-content-start fixed-top">
            <button
              type="button"
              className="above pr-1 btn shadow-none"
              onClick={() => setBlobsOn(p => !p)}
            >
              <i className={"bi bi-balloon" + (blobsOn ? "-fill bi-lit" : "")} />
            </button>
            <button
              type="button"
              className="above pr-1 btn shadow-none"
              onClick={() => setStarsOn(p => !p)}
            >
              <i className={"bi bi-stars" + (starsOn ? " bi-lit" : "")} />
            </button>
            <button
              type="button"
              className="above pr-1 btn shadow-none"
              onClick={() => setSlingOn(p => !p)}
            >
              <i className={"bi bi-emoji-smile" + (slingOn ? "-fill bi-lit" : "")} />
            </button>
          </div>
          {/*<div className="col d-flex justify-content-end">*/}
          {/*  <button type="button" className="above pr-1 btn shadow-none">*/}
          {/*    <i className="bi-list" />*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
        <header className="intro">
          <h1 className="above"> Leo Belyi </h1>
          <p className="above">
            Software Engineer
            <br/>
            Pacific Crest Trail 2021 Alum
            <br/>
            { descriptor }
            <br/>
            <button
              type="button"
              className="above p-0 btn shadow-none"
              onClick={() => setDescriptor(getRandomDescriptor())}
            >
              <i className="bi-arrow-clockwise" />
            </button>
          </p>
        </header>
        <div className="d-flex justify-content-center separator">
          <a onClick={() => scrollTo('gallery')} className="col d-flex justify-content-center align-items-center"> Photos </a>
          <a onClick={() => scrollTo('resume')} className="col d-flex justify-content-center align-items-center"> Resume </a>
          <a onClick={() => scrollTo('music')} className="col d-flex justify-content-center align-items-center"> Music </a>
          <a onClick={() => scrollTo('projects')} className="col d-flex justify-content-center align-items-center"> Projects </a>
        </div>
        <div className="d-flex justify-content-center separator">
          <a href={links.source} {...newTab} className="col d-flex justify-content-center align-items-center font-ter">
            View my project on Github
          </a>
        </div>
        <div className="separator" />
        <Profile />
        <br />
        <div ref={resumeRef}>
          <Resume />
        </div>
        <br />
        <header ref={galleryRef}> <h2 className="above"> My Pacific Crest Trail Journey </h2> </header>
        <Gallery visible={galleryVisible}/>
        <br />
        <div ref={spotifyRef}>
          <Spotify />
        </div>
        <br />
        <div ref={projectsRef} />
        <Projects />

        <br />

        <div className="mt-5 d-flex justify-content-center separator">
          {/*<a href={links.instagram} {...newTab} className="col d-flex justify-content-center align-items-center">*/}
          {/*  <i className="bi-instagram" />*/}
          {/*</a>*/}
          {/*<a href={links.facebook} {...newTab} className="col d-flex justify-content-center align-items-center">*/}
          {/*  <i className="bi-facebook" />*/}
          {/*</a>*/}
          <a href={links.linkedin} {...newTab} className="col d-flex justify-content-center align-items-center">
            <i className="bi-linkedin" />
          </a>
          <a href={links.github} {...newTab} className="col d-flex justify-content-center align-items-center">
            <i className="bi-github" />
          </a>
          <a href={links.email} className="col d-flex justify-content-center align-items-center">
            <i className="bi-envelope-fill" />
          </a>
          <a href={links.spotify} className="col d-flex justify-content-center align-items-center">
            <i className="bi-spotify" />
          </a>
        </div>
        <br />
        <p className="above">?? 2022 <a href="../../">Leonid Belyi</a> ?? <a href="https://creativecommons.org/licenses/by-nc/4.0/" {...newTab}>CC BY-NC 4.0</a></p>
        <br />
      </div>
    </div>
  );
}

export default App;
