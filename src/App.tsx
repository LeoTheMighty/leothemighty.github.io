import React, {useEffect, useRef} from 'react';

import './App.scss';
import Gallery from "./Gallery";
import useOnScreen from "./hooks/UseOnScreen";

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

// const random = (max: number) => {
//   return Math.floor(Math.random() * max);
// };
//
// const getRandomNImages = (n: number) => {
//   const IMAGES_SIZE = 185;
//   const ns: number[] = [];
//
//   while (n > 0) {
//     const r = random(IMAGES_SIZE) + 1;
//
//     if (ns.includes(r)) {
//       continue;
//     }
//
//     ns.push(r)
//
//     n--;
//   }
//
//   const components = [];
//   for (let i = 0; i < ns.length; i++) {
//     const e = ns[i];
//     components.push(
//       <div className={`carousel-item ${i === 0 && 'active'}`}>
//         <img src={require(`./images/pct/${e}.jpg`)} className="d-block w-100" alt={`${e}.jpg`} />
//       </div>
//     );
//   }
//
//   return components;
// };
//
// const getCarouselImages = () => {
//   const components = [];
//
//   const IMAGES_SIZE = 185;
//   for (let i = 0; i < IMAGES_SIZE; i++) {
//     const n = i + 1;
//     components.push(
//       <div className="carousel-item active">
//         <img src={require(`./images/pct/${n}.jpg`)} className="d-block w-100" alt={`${n}.jpg`} />
//       </div>
//     );
//   }
//
//   return components;
// };

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
          Heartthrob
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
      <header>
        <div>
          <div>
            <p>Trail Name: <b>OP</b></p>
          </div>
          <div>
            <p className="justify-content-start">
              Owl Podiatrist
              <br/>
              Over Packed/Over Powered
              <br/>
              Obnoxious Person <b>duh</b>
              <br/>
              Optimally Packed (i figured it out)
              <br/>
              Oh-jesus Pele
            </p>
          </div>
        </div>
        <ul>
        </ul>
      </header>
      <br />
      <header ref={projectsRef}> <h2> Projects </h2> </header>
      <h3> ...Working on it. </h3>
      <br />
      <header ref={resumeRef}> <h2> Resume </h2> </header>
      <h3> ...Working on it. </h3>
      <br />
      <header ref={profileRef}> <h2> About Me </h2> </header>
      <h3> ...Working on it. </h3>
      <br />
      <header ref={aocRef}> <h2> AOC Solutions </h2> </header>
      <h3> ...Working on it. </h3>
      <br />
    </div>
  );
}

export default App;
