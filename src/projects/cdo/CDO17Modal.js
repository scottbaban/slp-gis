import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import cdoiseprojects17 from '../cdo/1718/cdoise17';

const CDOModal17 = ({ closeModal }) => {
  const [selectedProjectType, setSelectedProjectType] = useState(null);

  const handleButtonClick = (projectType) => {
    setSelectedProjectType(projectType);
  };

  const filteredProjects = cdoiseprojects17.filter((project) => project.projectType === selectedProjectType);

  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>SD-ISE Projects 2017-2018</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h3>Please select project type:</h3>
          <div>
            <Button variant="primary" block onClick={() => handleButtonClick('SD-ISE')}>
              SD-ISE
            </Button>
            <Button variant="primary" block onClick={() => handleButtonClick('AEC')}>
              AEC
            </Button>
            <Button variant="primary" block onClick={() => handleButtonClick('CGH')}>
              CGH
            </Button>
            <Button variant="primary" block onClick={() => handleButtonClick('ERC')}>
              ERC
            </Button>
            <Button variant="primary" block onClick={() => handleButtonClick('MMC')}>
              MMC
            </Button>
            <Button variant="primary" block onClick={() => handleButtonClick('XCHMR')}>
              XCHMR
            </Button>
            <Button variant="primary" block onClick={() => handleButtonClick('XUCLA')}>
              XUCLA
            </Button>
            <Button variant="primary" block onClick={() => handleButtonClick('Others')}>
              Others
            </Button>
          </div>

          {filteredProjects.length > 0 && (
            <div>
              <h3>Project Details:</h3>
              {filteredProjects.map((project) => (
                <div key={project.projectNo}>
                  <p>Project No.: {project.projectNo}</p>
                  <p>Project Title: {project.projectTitle}</p>
                  <p>Start Date: {project.startDate}</p>
                  <p>End Date: {project.endDate}</p>
                  <p>Amount: {project.amount}</p>
                  <p>Partner/Funder: {project.partnerFunder}</p>
                  <p>Principal Proponent: {project.principalProponent}</p>
                  <p>Project Beneficiary: {project.projectBeneficiary}</p>
                  <p>Tapped XU Personnel: {project.tappedXUPersonnel}</p>
                  <p>Status/Remarks: {project.statusRemarks}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}

          {selectedProjectType && filteredProjects.length === 0 && (
            <div>
              <p>No projects found for the selected project type.</p>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CDOModal17;
