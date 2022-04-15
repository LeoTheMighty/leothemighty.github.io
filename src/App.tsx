import React, { useRef, useState } from 'react';

import './styles/App.scss';
import Gallery from "./Gallery";
import useOnScreen from "./hooks/UseOnScreen";
import { chooseRandom } from './helper';
import Resume from './files/resume.pdf';
// import Stars from './Stars';

const DESCRIPTORS = [
  "Heartthrob",
  "Wannabe Chef",
  "Spotify Playlist Connoisseur",
  "Chaotic Good",
  // "Libra by sign, Pisces by Nature",
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
  "Second white stripe Shaolin Kung Fu student from YMAA",
  "Backend engineer who is trying out frontend",
  "Never scored less than a 5 on an AP exam",
  "Built Different",
  // "Pushing P",
  "Real imposter who thinks they have imposter syndrome",
  "Spoiled by 100% Pure Kona Coffee",
  ""
];
const getRandomDescriptor = (): string => chooseRandom(DESCRIPTORS);

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
  const [descriptor, setDescriptor] = useState<string>(getRandomDescriptor());
  const [starsOn, setStarsOn] = useState(false);
  const [blobsOn, setBlobsOn] = useState(true);

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
          <div className="col d-flex justify-content-end">
            <button type="button" className="above pr-1 btn shadow-none">
              <i className="bi-list" />
            </button>
          </div>
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
          <a onClick={() => scrollTo('profile')} className="col d-flex justify-content-center align-items-center"> About Me </a>
        </div>
        <div className="separator" />
        <header className="above" ref={galleryRef}> <h2> My Pacific Crest Trail Journey </h2> </header>
        <Gallery visible={galleryVisible}/>
        <br />
        {/*<header ref={projectsRef}> <h2> Projects </h2> </header>*/}
        {/*<h3> ...Working on it. </h3>*/}
        {/*<br />*/}
        <header ref={resumeRef}> <h2> Resume </h2> </header>
        {/*<iframe id="iframepdf" src="files/resume.pdf" />*/}
        {/*<embed src={'files/resume.pdf'} type="application/pdf" />*/}
        <iframe
          className="resume-frame"
          title="resume"
          src={`${Resume}#view=FitV&toolbar=0&navpanes=0`}
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
        {/*<header ref={profileRef}> <h2> About Me </h2> </header>*/}
        {/*<h3> ...Working on it. </h3>*/}
        {/*<br />*/}
        {/*<header ref={aocRef}> <h2> AOC Solutions </h2> </header>*/}
        {/*<h3> ...Working on it. </h3>*/}
        {/*<br />*/}
      </div>
    </div>
  );
}

export default App;
