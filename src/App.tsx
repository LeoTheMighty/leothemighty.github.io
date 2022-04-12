import React, { useRef } from 'react';

import './App.scss';
import Gallery from "./Gallery";
import useOnScreen from "./hooks/UseOnScreen";
import { chooseRandom } from './helper';
import Resume from './resume.pdf';
// import Stars from './Stars';

const DESCRIPTOR: string = chooseRandom([
  "Heartthrob",
  "Wannabe Chef",
  "Spotify Playlist Connoisseur",
  "Chaotic Good",
  "Libra by sign, Pisces by Nature",
  "Struggling Sweatshirt Addict",
  "Wrote one guitar song and won't shut up about it",
  "Wishes Yandhi was released",
  "Exclusively watches Twitch clips on YouTube",
  "Liverpool Fan since 2015",
  "Escape Room Cassanova",
  "Incredibly Mediocre Photographer",
  "Leader of the Cinnabons",
  "Rocket League Season 1 Player",
  "Will do the same jigsaw puzzle over and over again",
  "Surfer Spoiled by Hawaiian water temperatures",
  "Second white stripe Shaolin Kung Fu student from YMAA"
]);

// const tryFetch = (url: string) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       "Access-Control-Request-Headers": "Content-Type, Authorization",
//       "Access-Control-Allow-Origin": "https://www.icloud.com",
//       "Host": "p45-sharedstreams.icloud.com",
//       "Origin": "https://www.icloud.com",
//       "Referer": "https://www.icloud.com/"
//     },
//   };
//   fetch(url, options)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

const App = () => {
  const galleryRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const resumeRef = useRef<null | HTMLDivElement>(null);
  const profileRef = useRef<null | HTMLDivElement>(null);
  const aocRef = useRef<null | HTMLDivElement>(null);

  const galleryVisible = useOnScreen(galleryRef);

  // useEffect(() => {
  //   tryFetch('https://www.icloud.com/sharedalbum/#B0j53qWtHGJnFql');
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     "Access-Control-Request-Headers": "Content-Type, Authorization",
    //     "Access-Control-Allow-Origin": "https://www.icloud.com"
    //   },
    // };
    // fetch("https://p45-sharedstreams.icloud.com/B0j53qWtHGJnFql/sharedstreams/webstream", options)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  // });

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
      {/*<Stars n={1} />*/}
      {/*</div>*/}
      {/*<div id="stars" />*/}
      <div id="stars">
        <div />
      </div>
      <div className="App">
        <div className="d-flex justify-content-end separator">
          <button type="button" className="pr-1 btn shadow-none">
            <i className="bi-list" />
          </button>
        </div>
        <header className="intro">
          <h1> Leo Belyi </h1>
          <p>
            Software Engineer
            <br/>
            PCT Alum
            <br/>
            { DESCRIPTOR }
          </p>
        </header>
        <div className="d-flex justify-content-center separator">
          <a onClick={() => scrollTo('gallery')} className="col d-flex justify-content-center align-items-center"> Photos </a>
          <a onClick={() => scrollTo('resume')} className="col d-flex justify-content-center align-items-center"> Resume </a>
          <a onClick={() => scrollTo('projects')} className="col d-flex justify-content-center align-items-center"> Projects </a>
          <a onClick={() => scrollTo('profile')} className="col d-flex justify-content-center align-items-center"> About Me </a>
        </div>
        <div className="separator" />
        <header ref={galleryRef}> <h2> My Pacific Crest Trail Journey </h2> </header>
        <Gallery visible={galleryVisible}/>
        {/*<header>*/}
        {/*  <div>*/}
        {/*    <div>*/}
        {/*      <p>Trail Name: <b>OP</b></p>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <p className="justify-content-start">*/}
        {/*        Owl Podiatrist*/}
        {/*        <br/>*/}
        {/*        Over Packed/Over Powered*/}
        {/*        <br/>*/}
        {/*        Obnoxious Person <b>duh</b>*/}
        {/*        <br/>*/}
        {/*        Optimally Packed (i figured it out)*/}
        {/*        <br/>*/}
        {/*        Oh-jesus Pele*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <ul>*/}
        {/*  </ul>*/}
        {/*</header>*/}
        <br />
        <header ref={projectsRef}> <h2> Projects </h2> </header>
        <h3> ...Working on it. </h3>
        <br />
        <header ref={resumeRef}> <h2> Resume </h2> </header>
        {/*<iframe id="iframepdf" src="files/resume.pdf" />*/}
        {/*<embed src={'files/resume.pdf'} type="application/pdf" />*/}
        <iframe
          className="resume-frame"
          title="resume"
          src={`${Resume}#view=Fit&toolbar=0&navpanes=0`}
          height="100%"
          width="80%"
        >
          <p> Your browser does not support this </p>
        </iframe>
        {/*<div className="resume-frame">*/}
          {/*<embed*/}
          {/*  src="https://docs.google.com/document/d/1-5_suPfVU-tlXHdqm9aSljvfWqdEhXHQ7Cm8MvAmnNE/edit?usp=sharing"*/}
          {/*  width="100%" height="1000px"*/}
          {/*/>*/}
          {/*<iframe*/}
          {/*  title="resume"*/}
          {/*  src={`${Resume}#view=fitH`}*/}
          {/*  height="100%"*/}
          {/*  width="100%"*/}
          {/*/>*/}
        {/*</div>*/}
        <br />
        <header ref={profileRef}> <h2> About Me </h2> </header>
        <h3> ...Working on it. </h3>
        <br />
        <header ref={aocRef}> <h2> AOC Solutions </h2> </header>
        <h3> ...Working on it. </h3>
        <br />
      </div>
    </div>
  );
}

export default App;
