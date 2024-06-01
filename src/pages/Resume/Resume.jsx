import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';

const Resume = () => {
  return (
  <div className="download-option">
     <a href="/resume.pdf" download="My_Resume.pdf">
      <button>Download Resume</button>
     </a>
</div>
  );
};

export default Resume;
