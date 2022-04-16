import React from 'react';
import links from '../links';

const Resume = () => (
  <>
    <br />
    <iframe
      className="resume-frame above d-none d-md-inline"
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
        Click Here to view and print my Resume
      </button>
    </a>
    <br />
  </>
);

export default Resume;
