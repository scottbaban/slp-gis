import React, { useState } from 'react';
import { Popup } from 'react-leaflet';
import CDO17Modal from './cdo/CDO17Modal';

const CDOProjects = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const years = ['2017-2018', '2018-2019', '2019-2020', '2020-2021'];
  const [isModalOpen, setModalOpen] = useState(false);

  const handleYearButtonClick = (year) => {
    setSelectedYear(year);
    if (year === '2017-2018') {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent popup from closing when clicked
  };

  const handleModalButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <Popup position={[8.4542, 124.6319]} closeButton={false} closeOnClick={false}>
      <div onClick={handlePopupClick}>
        <h2>SD Projects in CDO 2017-2021</h2>
        {!isModalOpen && (
          <>
            <p>Please select year:</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {years.map((year) => (
                <button key={year} onClick={() => handleYearButtonClick(year)}>
                  {year}
                </button>
              ))}
            </div>
          </>
        )}
        {selectedYear && !isModalOpen && <p>Selected year: {selectedYear}</p>}
      </div>
      {isModalOpen && <CDO17Modal closeModal={handleModalButtonClick} />}
    </Popup>
  );
};

export default CDOProjects;
