import React from 'react';
import { Link } from 'react-router-dom';
import ncrprojects from './ncr'; // Assuming cdo.js is in the same directory
import './NCRPhProjects.css'; // Import the CSS file for styling

function NCRPhProjects() {
  return (
    <div>
      <h1>SD Projects in Metro Manila (2017-2021)</h1>
      <Link to="/">Go back to PH Map</Link>

      <table>
        <thead>
          <tr>
            <th>Lead Unit</th>
            <th>Project No.</th>
            <th>Project Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Amount</th>
            <th>Partner/Funder</th>
            <th>Principal Proponent</th>
            <th>Project Beneficiary</th>
            <th>Tapped XU Personnel</th>
            <th>Status Remarks</th>
          </tr>
        </thead>
        <tbody>
          {ncrprojects.map((project, index) => (
            <tr key={index}>
              <td>{project.leadUnit}</td>
              <td>{project.projectNo}</td>
              <td>{project.projectTitle}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.amount}</td>
              <td>{project.partnerFunder}</td>
              <td>{project.principalProponent}</td>
              <td>{project.projectBeneficiary}</td>
              <td>{project.tappedXUPersonnel}</td>
              <td>{project.statusRemarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NCRPhProjects;
