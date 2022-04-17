import links from './links';
import { newTab } from './helper';
import React from 'react';

type Props = {
  title: string;
  subtitle: React.ReactNode;
  subsubtitle?: React.ReactNode;
  source?: string;
  link: string;
  preview: string;
  previewAlt: string;
  previewSubtitle: string;
  children: React.ReactNode;
  reverse?: boolean;
};

const Project = (props: Props) => {
  const { title, subtitle, source, link, preview, previewAlt, previewSubtitle, reverse, children } = props;

  const smallComponent = <div className="d-block d-md-none">
    <h3><a href={link} {...newTab}>
      { title }
    </a></h3>
    <i> { subtitle } </i>
    <a href={link} {...newTab}>
      <img className="project-preview-fill m-2" src={preview} alt={previewAlt} />
    </a>
    <br />
    <i> { previewSubtitle } </i>
  </div>;

  const previewComponent = <div className="col d-none d-md-block">
    <a href={link} {...newTab}>
      <img className="project-preview m-2" src={preview} alt={previewAlt} />
    </a>
    <p> {previewSubtitle} </p>
  </div>;

  const descriptionComponent = <div className="col-lg above d-none d-md-block">
    <h3><a href={link} {...newTab}>
      { title }
    </a></h3>
    <i> { subtitle } </i>

    <div className="project-description">
      { children }
    </div>
    { source && (<a href={source} {...newTab}><i>View project source here</i></a>) }
  </div>;

  return (
    <div className="mt-5 d-flex justify-content-center above">
      { reverse ?
        [smallComponent, descriptionComponent, previewComponent] :
        [smallComponent, previewComponent, descriptionComponent]
      }
    </div>
  );
}

export default Project;
