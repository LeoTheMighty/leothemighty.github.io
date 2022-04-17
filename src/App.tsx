import React, { useRef, useState } from 'react';

import './styles/App.scss';
import Gallery from "./Gallery";
import useOnScreen from "./hooks/UseOnScreen";
import { newTab } from './helper';
import { getRandomDescriptor } from './descriptor';
import links from './links';
import Projects from './Projects';
import Profile from './Profile';
import Resume from './sections/Resume';

const App = () => {
  const [descriptor, setDescriptor] = useState<string>(getRandomDescriptor());
  const [starsOn, setStarsOn] = useState(true);
  const [blobsOn, setBlobsOn] = useState(true);

  const galleryRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const resumeRef = useRef<null | HTMLDivElement>(null);
  const profileRef = useRef<null | HTMLDivElement>(null);
  const aocRef = useRef<null | HTMLDivElement>(null);

  const galleryVisible = useOnScreen(galleryRef);

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
    }

    ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overlay-container">
      { starsOn && (<div id="stars"><div /></div>) }
      { blobsOn && (<div id="blobs"><div /></div>) }
      <div className="App">
        <div className="d-flex separator">
          <div className="col d-flex justify-content-start">
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
          <a onClick={() => scrollTo('projects')} className="col d-flex justify-content-center align-items-center"> Projects </a>
          <a href={links.source} {...newTab} className="col d-flex justify-content-center align-items-center"> Source </a>
        </div>
        <div className="separator" />
        <header ref={galleryRef}> <h2 className="above"> My Pacific Crest Trail Journey </h2> </header>
        <Gallery visible={galleryVisible}/>
        <br />
        {/*<header className="above" ref={profileRef}> <h2> About Me </h2> </header>*/}
        <Profile />
        <br />
        <div ref={resumeRef}>
          <Resume />
        </div>
        <br />
        <header className="above" ref={projectsRef}> <h2> Projects </h2> </header>
        <Projects />
        <br />

        {/*<header ref={aocRef}> <h2> AOC Solutions </h2> </header>*/}
        {/*<h3> ...Working on it. </h3>*/}
        {/*<br />*/}

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
        <p className="above">© 2022 <a href="../../">Leonid Belyi</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/" {...newTab}>CC BY-NC 4.0</a></p>
        <br />
      </div>
    </div>
  );
}

export default App;
