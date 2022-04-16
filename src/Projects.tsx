import Project from './Project';
import links from './links';
import { newTab } from './helper';
import React from 'react';

const Projects = () => (
  <>
    <Project
      title="CS4300: Computer Graphics"
      subtitle={<i> Created in Collaboration with <a href={links.joekt} {...newTab}>
        Joseph Kaming-Thanassi
      </a></i>}
      link={links.projects.cs4300.assignments[3]}
      preview={links.projects.cs4300.preview}
      previewAlt="Final Project Preview"
      previewSubtitle="Final Project View; Press 's' to view cel-shading as shown"
    >
      <ul>
        <li><a href={links.projects.cs4300.assignments[0]} {...newTab}>
          Assignment 3: DNA Model – Non-Hierarchical
          <ul>
            <li>Press the left and right arrow keys to rotate the model.</li>
          </ul>
        </a></li>
        <li><a href={links.projects.cs4300.assignments[1]} {...newTab}>
          Assignment 4: DNA Model – Scenegraph
          <ul>
            <li>Camera modes:
              <ul>
                <li>Press the <code>1</code> key to activate orbit mode. Use the left and right arrow keys to orbit around the model.</li>
                <li>Press the <code>2</code> key to activate survey mode. The camera will move around the scene on its own to survey the models.</li>
              </ul>
            </li>
          </ul>
        </a></li>
        <li><a href={links.projects.cs4300.assignments[2]} {...newTab}>
          Assignment 5: DNA Model – Lights
          <ul>
            <li>Camera modes:
              <ul>
                <li>Press the <code>1</code> key to activate orbit mode. Use the left and right arrow keys to orbit around the model.</li>
                <li>Press the <code>2</code> key to activate survey mode. The camera will move around the scene on its own to survey the models.</li>
                <li>Press the <code>3</code> key to activate first person mode. The camera is fixed to the back of the quadcopter as it flies around the scene.</li>
              </ul>
            </li>
          </ul>
        </a></li>
        <li><a href={links.projects.cs4300.assignments[3]} {...newTab}>
          Assignment 6: DNA Model – Textures and Cel Shading
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
        </a></li>
      </ul>
    </Project>
    <Project
      title="Pillars"
      subtitle={<i> Personal Project </i>}
      source={links.projects.pillars.source}
      link={links.projects.pillars.site}
      preview={links.projects.pillars.preview}
      previewAlt="Pillars Preview"
      previewSubtitle="You can really see how far my frontend skills have come :)"
      reverse
    >
      <ul>
        <li> This was one of my personal favorite projects I did on the side </li>
        <li> This concept is based around the concept of homogeneity: </li>
        <ul>
          <li> I actually have a theory that a part of the reason why Americans have such a problem with obesity/health in general is because of the Diet culture we have </li>
          <li> Our culture is very much one that values perfection in action and does grand gestures on the regular.</li>
          <li> For instance, it's a very popular idea to just "cut out" all of something, like sugar for instance.</li>
          <li> Now this is all well and good... if one devotes their life to it. But in reality, this is not a sustainable diet and the individual will cave eventually and go onto the "Post Diet Binge".</li>
          <ul><li> Post Diet Binges are always the most intense because of human nature where one will think of something even more when that thing appears to be unavailable to them.</li></ul>
          <li> This binge will counteract, and probably out-do any of the good that the diet would bring them.</li>
          <li> Because of this, people in diet culture run the risk of entering this trampoline diet, going back and forth between diets and binges, never letting their bodies get used to their diet.</li>
          <li> Now this is the biggest deal because the human body is one that THRIVES on homogeneity, even if something is non-ideal (take for instance a sleep schedule), as long as it is at least on a consistent schedule, the body will try its best to get used to it. Therefore, the whole ideas of constant diets and binges are <b>incredibly antithetical</b> to this process as a whole.</li>
        </ul>
        <li> This is why the Pillars app came to be; it is an admission that "Consistency is Key" and that we want to make sure that whatever goals/habits we have, they remain consistent to allow our body to adjust and thrive in these conditions.</li>
        <li> It is a simple app where you customize your "Pillars" of your days (aka what you want to do daily) and then you check them off as you do them. The UI then shows you your progress and how tall/consistent each Pillar is and how much you want to focus on them.</li>
      </ul>
    </Project>
    <Project
      title="Original Website"
      subtitle={<i> Personal Website </i>}
      source={links.projects.firstSite.source}
      link={links.projects.firstSite.site}
      preview={links.projects.firstSite.preview}
      previewAlt="Old Website Preview"
      previewSubtitle="I know... lmao."
    >
      <ul>
        <li> I created this as my first outward-facing personal website. </li>
        <li> It was a simple React app, using Semantic-UI and Sass for the frontend</li>
        <ul><li> I had NO idea how to use these intelligently, as is apparent aha </li></ul>
        <li> Although it really does look terrible, look at this almost exclusive backend engineer trying to learn frontend by diving into it :)</li>
      </ul>
    </Project>
  </>
);

export default Projects;
