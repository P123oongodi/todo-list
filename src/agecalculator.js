import React, { useState } from 'react';
import { AddOutlined, DeleteOutlined } from "@mui/icons-material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  return (
    <div className="whole">
         <div className="App">
      <h1 className="title">Age Calculator</h1>
      <div className='width'>
      <div className="addplaces">
        <input
          type="date"
          className="input"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={calculateAge} className="button"><ChevronRightIcon /></button>
      </div>
      </div>
      
      <div className="texts">
      {age !== null && <p>Your age is: {age} years</p>}
      </div>
    </div>
    </div>
   
  );
}
export default AgeCalculator;

