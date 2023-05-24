import React, { useState } from 'react';
import Slider from 'react-slick';
import projects from './CDOProjects';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SDProjectsPopup() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentProjectIndex,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentProjectIndex(newIndex);
    },
  };

  const currentProject = projects[currentProjectIndex];

  const handleNextProject = () => {
    const nextIndex = currentProjectIndex + 1;
    if (nextIndex < projects.length) {
      setCurrentProjectIndex(nextIndex);
    }
  };

  const handlePreviousProject = () => {
    const prevIndex = currentProjectIndex - 1;
    if (prevIndex >= 0) {
      setCurrentProjectIndex(prevIndex);
    }
  };

  return (
    <div className="popup">
      <h3>SD Projects in CDO</h3>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <p>
              <strong>Project No.:</strong> {project.projectNo}
            </p>
            <p>
              <strong>Lead unit:</strong> {project.leadUnit}
            </p>
            <p>
              <strong>Project title:</strong> {project.projectTitle}
            </p>
            <p>
              <strong>Start Date:</strong> {project.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {project.endDate}
            </p>
            <p>
              <strong>Partner/ Funder:</strong> {project.partnerFunder}
            </p>
            <p>
              <strong>Amount:</strong> {project.amount}
            </p>
            <p>
              <strong>Principal Proponent:</strong> {project.principalProponent}
            </p>
            <p>
              <strong>Status/Remarks:</strong> {project.statusRemarks}
            </p>
            <hr />
          </div>
        ))}
      </Slider>
      <div className="nav-buttons">
        {currentProjectIndex > 0 && (
          <button onClick={handlePreviousProject}>Previous</button>
        )}
        {currentProjectIndex < projects.length - 1 && (
          <button onClick={handleNextProject}>Next</button>
        )}
      </div>
    </div>
  );
}

export default SDProjectsPopup;
