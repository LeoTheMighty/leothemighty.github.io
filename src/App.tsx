import React, { useEffect } from 'react';

import './App.scss';
import Gallery from "./Gallery";

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

  return (
    <div className="App">
      <div className="d-flex justify-content-end">
        <button type="button" className="p-0 btn shadow-none">
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
      <header><h2> PCT Album </h2></header>
      <Gallery />
      <header> <h2> Projects </h2> </header>
      <header> <h2> Resume </h2> </header>
      <header> <h2> AOC Solutions </h2> </header>
    </div>
  );
}

export default App;
