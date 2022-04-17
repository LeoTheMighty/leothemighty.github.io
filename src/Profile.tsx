import React from 'react';

import links from './links';
import { newTab } from './helper';

const Profile = () => (
  <>
    <div className="profile-container m-3 d-flex justify-content-center">
      <img className="profile-cover" src={links.profile} alt="profile cover" />
      <div className="profile above">
        <div className="col">
          <img className="above profile-picture" src={links.me} alt="profile" />
          {/*<a href={link} {...newTab}>*/}
          {/*  <img className="project-preview m-2" src={preview} alt={previewAlt} />*/}
          {/*</a>*/}
          {/*<p> {previewSubtitle} </p>*/}
          {/*<div className="" style={{ justifyContent: 'center', textAlign: 'start', width: '50%' }}>*/}
          {/*  <h2 className="mt-2"> Skills </h2>*/}
          {/*  <ul>*/}
          {/*    <li> <p> Rails </p></li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
        <div className="col above profile-description">
          <h1> Leonid Belyi </h1>
          <i> My legal name</i>
          <p className="mt-4 d-none d-lg-block">
            I'm a Software Developer based out of San Diego at the moment. I'm trying to learn
            as much as possible so that I can go out and do something incredible one day.
            Although I'm relatively new in the space, I am hard-working, creative, and I
            will hop on any opportunity whenever they present themselves.
          </p>
        </div>
      </div>
      <div className="separator" />
      <br/>
      <br/>
      <br/>
      <br/>
      {/*<div className="w-100">*/}
      {/*  <p className="w-100">*/}
      {/*    This is a description apparently*/}
      {/*  </p>*/}
      {/*</div>*/}

      {/*  <div className="project-description">*/}
      {/*    { children }*/}
      {/*  </div>*/}
      {/*  { source && (<a href={source} {...newTab}><i>View project source here</i></a>) }*/}
      {/*</div>*/}
      {/*<div className="col">*/}
      {/*  <a href={link} {...newTab}>*/}
      {/*    <img className="project-preview m-2" src={preview} alt={previewAlt} />*/}
      {/*  </a>*/}
      {/*  <p> {previewSubtitle} </p>*/}
      {/*</div>*/}
      {/*<div className="col above">*/}
      {/*  { title }*/}
      {/*    </a></h3>*/}
      {/*    <i> { subtitle } </i>*/}

      {/*  <div className="project-description">*/}
      {/*    { children }*/}
      {/*  </div>*/}
      {/*  { source && (<a href={source} {...newTab}><i>View project source here</i></a>) }*/}
      {/*</div>*/}
    </div>
    <p className="above m-4 d-block d-lg-none">
      I'm a Software Developer based out of San Diego at the moment. I'm trying to learn
      as much as possible so that I can go out and do something incredible one day.
      Although I'm relatively new in the space, I am hard-working, creative, and I
      will hop on opportunities whenever they present themselves.
    </p>
  </>
);

export default Profile;
