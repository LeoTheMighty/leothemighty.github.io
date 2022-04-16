import React, { useRef, useState } from 'react';

import './styles/App.scss';
import Gallery from "./Gallery";
import useOnScreen from "./hooks/UseOnScreen";
import { chooseRandom } from './helper';
import links from './links';
import Resume from './files/resume.pdf';
import CS4300Preview from './images/cs4300preview.png';

const DESCRIPTORS = [
  "Heartthrob",
  "Wannabe Chef",
  "Spotify Playlist Connoisseur",
  "Chaotic Good",
  "Libra by Sign, Leo by Name",
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
  "Real imposter who thinks they have imposter syndrome",
  "Spoiled by 100% Pure Kona Coffee",
  "Ultimate Sugar Tooth",
  "Has made a grown man cry by making him cinnamon buns from scratch",
  "Whistles like a monster",
  "Got a $100 tip at a bar from a super drunk guy on new year's eve because of a trombone solo played so well",
  "Doesn't get lost in minecraft",
  "Listens to Blonde on repeat",
  "Has run a sub-2-hour half marathon ONCE",
  "went on a small (2653 miles) stroll the day after graduation",
  "Has never heard his last name correctly pronounced the first time",
  "Git wizard in training",
  "Middle child",
  "Northeatern Unviersity's Khoury College of Computer Science Summa Cum Laude Graduate; Class of 2021",
  "Took him 8 hours to code these stars :(",
  "Discreetly Questions Authority",
  "Existential Crisis Aficionado",
  "Don't click that button below me you may never see me again :(",
];

const newTab = {
  target: "_blank",
  rel: "noreferrer noopener",
};

const getRandomDescriptor = (): string => chooseRandom(DESCRIPTORS);

const App = () => {
  const [descriptor, setDescriptor] = useState<string>(getRandomDescriptor());
  const [starsOn, setStarsOn] = useState(true);
  const [blobsOn, setBlobsOn] = useState(false);

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
        <header ref={galleryRef}> <h2 className="above"> My Pacific Crest Trail Journey </h2> </header>
        <Gallery visible={galleryVisible}/>
        <br />
        <header className="above" ref={resumeRef}> <h2> Resume </h2> </header>
        {/*<iframe id="iframepdf" src="files/resume.pdf" />*/}
        {/*<embed src={'files/resume.pdf'} type="application/pdf" />*/}
        <iframe
          className="resume-frame above"
          title="resume"
          src={`${links.resume}#view=FitV&toolbar=0&navpanes=0`}
          height="100%"
          width="80%"
        >
          <p> Your browser does not support this </p>
        </iframe>
        <br />
        <a target="_blank" rel="noopener noreferrer" href={links.resume}>
          <button className="print-button btn btn-danger">
            Click here to view and print
          </button>
        </a>
        <br />
        <br />
        <header ref={projectsRef}> <h2> Projects </h2> </header>
        <div className="mt-5 d-flex justify-content-center">
          <div className="col">
            <a href={links.projects.cs4300.assignments[3]} {...newTab}>
              <img className="project-preview m-2" src={CS4300Preview} alt="CS4300 Final Project Preview" />
            </a>
            <p> Last Project view. Press 's' to view cel-shading as shown here </p>
          </div>
          <div className="col above">
            <h3>
              CS 4300 Computer Graphics
            </h3>
            <i> Created in collaboration with
              <a href={links.joekt} {...newTab}>
                Joseph Kaming-Thanassi
              </a>
            </i>

            <ul>
              <li><a href={links.projects.cs4300.assignments[0]} {...newTab}>Assignment 3: DNA Model – Non-Hierarchical</a>
                <ul>
                  <li>Press the left and right arrow keys to rotate the model.</li>
                </ul>
              </li>
              <li><a href={links.projects.cs4300.assignments[1]} {...newTab}>Assignment 4: DNA Model – Scenegraph</a>
                <ul>
                  <li>Camera modes:
                    <ul>
                      <li>Press the <code>1</code> key to activate orbit mode. Use the left and right arrow keys to orbit around the model.</li>
                      <li>Press the <code>2</code> key to activate survey mode. The camera will move around the scene on its own to survey the models.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href={links.projects.cs4300.assignments[2]} {...newTab}>Assignment 5: DNA Model – Lights</a>
                <ul>
                  <li>Camera modes:
                    <ul>
                      <li>Press the <code>1</code> key to activate orbit mode. Use the left and right arrow keys to orbit around the model.</li>
                      <li>Press the <code>2</code> key to activate survey mode. The camera will move around the scene on its own to survey the models.</li>
                      <li>Press the <code>3</code> key to activate first person mode. The camera is fixed to the back of the quadcopter as it flies around the scene.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href={links.projects.cs4300.assignments[3]} {...newTab}>Assignment 6: DNA Model – Textures and Cel Shading</a>
                <ul>
                  <li>Camera modes:
                    <ul>
                      <li>Press the <code>1</code> key to activate orbit mode. Use the left and right arrow keys to orbit around the model.</li>
                      <li>Press the <code>2</code> key to activate survey mode. The camera will move around the scene on its own to survey the models.</li>
                      <li>Press the <code>3</code> key to activate first person mode. The camera is fixed to the back of the quadcopter as it flies around the scene.</li>
                    </ul>
                  </li>
                  <li>Shading Modes:
                    <ul>
                      <li>Press the <code>s</code> key to switch between plastic/texture shading and Cel shading.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <br />

        {/*<header className="above"> <h2> Contact: </h2> </header>*/}

        {/*<header ref={profileRef}> <h2> About Me </h2> </header>*/}
        {/*<h3> ...Working on it. </h3>*/}
        {/*<br />*/}
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
        </div>
      </div>
    </div>
  );
}

export default App;
