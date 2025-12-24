import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    pmtTime: { hours: '', minutes: '' },
    pmtDate: { day: '', month: '', year: '' },
    engineer: '',
    hostName: '',
    crq: '',
    shelterType: '',
    rackMounted: '',
    dustDevice: '',
    dustSite: '',
    rustStatus: '',
    backSpace: '',
    railKit: '',
    deviceCleaning: '',
    fanCleaning: '',
    filterCleaning: '',
    temperature: '',
    acCount: '',
    acNotWorkingCount: '',
    doorClosable: '',
    deepCleaning: '',
    cableDressing: '',
    alarmModule: '',
    fillerTrayMissing: '',
    sfpCapMissing: '',
    deviceSerialPhotos: '',
    photoNotAllowed: '',
    properGap: '',
    earthingConnected: '',
    otherIssues: '',
    sitePersonType: '',
    personName: '',
    personNumber: '',
    signatureAvailable: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (parent, child, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: { ...prev[parent], [child]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      email: '',
      pmtTime: { hours: '', minutes: '' },
      pmtDate: { day: '', month: '', year: '' },
      engineer: '',
      hostName: '',
      crq: '',
      shelterType: '',
      rackMounted: '',
      dustDevice: '',
      dustSite: '',
      rustStatus: '',
      backSpace: '',
      railKit: '',
      deviceCleaning: '',
      fanCleaning: '',
      filterCleaning: '',
      temperature: '',
      acCount: '',
      acNotWorkingCount: '',
      doorClosable: '',
      deepCleaning: '',
      cableDressing: '',
      alarmModule: '',
      fillerTrayMissing: '',
      sfpCapMissing: '',
      deviceSerialPhotos: '',
      photoNotAllowed: '',
      properGap: '',
      earthingConnected: '',
      otherIssues: '',
      sitePersonType: '',
      personName: '',
      personNumber: '',
      signatureAvailable: ''
    });
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="pmt-form">
        <div className="form-header">
          <h1>PMT Observation Report Q2 OND'25</h1>
          <p>Welcome to the Airtel Bharti PMT Observation Report Form</p>
        </div>

        <div className="form-section">
          <label>Enter Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div className="form-section">
          <label>PMT Complete Time:</label>
          <div className="time-input">
            <input type="number" min="0" max="23" placeholder="Hours" value={formData.pmtTime.hours} onChange={(e) => handleNestedChange('pmtTime', 'hours', e.target.value)} /> :
            <input type="number" min="0" max="59" placeholder="Minutes" value={formData.pmtTime.minutes} onChange={(e) => handleNestedChange('pmtTime', 'minutes', e.target.value)} />
          </div>
        </div>

        <div className="form-section">
          <label>PMT Complete Date:</label>
          <div className="date-input">
            <input type="number" min="1" max="31" placeholder="Day" value={formData.pmtDate.day} onChange={(e) => handleNestedChange('pmtDate', 'day', e.target.value)} /> -
            <input type="number" min="1" max="12" placeholder="Month" value={formData.pmtDate.month} onChange={(e) => handleNestedChange('pmtDate', 'month', e.target.value)} /> -
            <input type="number" min="1" max="2099" placeholder="Year" value={formData.pmtDate.year} onChange={(e) => handleNestedChange('pmtDate', 'year', e.target.value)} />
          </div>
        </div>

        <div className="form-section">
          <label>Select Engineer Name:</label>
          <select name="engineer" value={formData.engineer} onChange={handleInputChange} required>
            <option value="">Choose Engineer</option>
            <option value="Engineer1">Engineer 1</option>
            <option value="Engineer2">Engineer 2</option>
            <option value="Engineer3">Engineer 3</option>
          </select>
        </div>

        <div className="form-section">
          <label>Select Host Name:</label>
          <input type="text" name="hostName" value={formData.hostName} onChange={handleInputChange} placeholder="Enter Host Name" />
        </div>

        <div className="form-section">
          <label>CRQ:</label>
          <input type="text" name="crq" value={formData.crq} onChange={handleInputChange} />
        </div>
        <div className="form-section">
          <label>Installed at Shelter/ODC/MSC/BSC/REG:</label>
          <div className="radio-group">
            {['SHELTER', 'REG', 'MSC', 'BSC', 'ODC'].map(type => (
              <label key={type}><input type="radio" name="shelterType" value={type} checked={formData.shelterType === type} onChange={handleInputChange} /> {type}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Rack And Device Mounted Firmly:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="rackMounted" value={option} checked={formData.rackMounted === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Dust on Device:</label>
          <div className="radio-group">
            {['Low', 'Medium', 'High'].map(level => (
              <label key={level}><input type="radio" name="dustDevice" value={level} checked={formData.dustDevice === level} onChange={handleInputChange} /> {level}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Dust on Site:</label>
          <div className="radio-group">
            {['Low', 'Medium', 'High'].map(level => (
              <label key={level}><input type="radio" name="dustSite" value={level} checked={formData.dustSite === level} onChange={handleInputChange} /> {level}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Rust Status:</label>
          <div className="radio-group">
            {['Rusty', 'Not-Rusty'].map(status => (
              <label key={status}><input type="radio" name="rustStatus" value={status} checked={formData.rustStatus === status} onChange={handleInputChange} /> {status}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Back Space Available:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="backSpace" value={option} checked={formData.backSpace === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Rail-Kit Available:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="railKit" value={option} checked={formData.railKit === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Device Cleaning Done:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="deviceCleaning" value={option} checked={formData.deviceCleaning === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Fan Cleaning Done:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="fanCleaning" value={option} checked={formData.fanCleaning === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Device Air Filter Cleaning Done:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="filterCleaning" value={option} checked={formData.filterCleaning === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>
        <div className="form-section">
          <label>Site Temperature (Degree Celsius):</label>
          <select name="temperature" value={formData.temperature} onChange={handleInputChange}>
            <option value="">Choose</option>
            <option value="AC Not Installed">AC Not Installed</option>
            <option value="Temp Not Showing">Temp Not Showing</option>
            <option value="AC Not Working">AC Not Working</option>
            {Array.from({length: 36}, (_, i) => (5 + i)).map(temp => (
              <option key={temp} value={temp}>{temp}°C</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label>AC Count:</label>
          <select name="acCount" value={formData.acCount} onChange={handleInputChange}>
            <option value="">Choose</option>
            {Array.from({length: 22}, (_, i) => i).map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
            <option value="Above 20">Above 20</option>
          </select>
        </div>

        <div className="form-section">
          <label>AC not working count:</label>
          <select name="acNotWorkingCount" value={formData.acNotWorkingCount} onChange={handleInputChange}>
            <option value="">Choose</option>
            {Array.from({length: 16}, (_, i) => i).map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label>Main Door Proper Closable:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="doorClosable" value={option} checked={formData.doorClosable === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Deep Cleaning Required:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="deepCleaning" value={option} checked={formData.deepCleaning === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Cable Dressing Status:</label>
          <div className="radio-group">
            {['Dressed', 'Undressed', 'Extremely Poor'].map(status => (
              <label key={status}><input type="radio" name="cableDressing" value={status} checked={formData.cableDressing === status} onChange={handleInputChange} /> {status}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Alarm on module:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="alarmModule" value={option} checked={formData.alarmModule === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Filler tray Missing:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="fillerTrayMissing" value={option} checked={formData.fillerTrayMissing === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>SFP Cap missing:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="sfpCapMissing" value={option} checked={formData.sfpCapMissing === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Device Serial Number Photos Captured:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="deviceSerialPhotos" value={option} checked={formData.deviceSerialPhotos === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Photos Not Allowed due to MSC/REG/BSC:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="photoNotAllowed" value={option} checked={formData.photoNotAllowed === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Proper Gap available between other devices:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="properGap" value={option} checked={formData.properGap === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Earthing is connected with BUSBAR:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="earthingConnected" value={option} checked={formData.earthingConnected === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>
        <div className="form-section">
          <label>Any Other Issues:</label>
          <textarea name="otherIssues" value={formData.otherIssues} onChange={handleInputChange} rows="3" placeholder="Enter other issues separated by comma" />
        </div>

        <div className="form-section">
          <label>Site Person Details:</label>
          <div className="radio-group">
            {['ISP', 'NMT', 'Local Person', 'Technician', 'Security Guard'].map(type => (
              <label key={type}><input type="radio" name="sitePersonType" value={type} checked={formData.sitePersonType === type} onChange={handleInputChange} /> {type}</label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Person Name:</label>
          <input type="text" name="personName" value={formData.personName} onChange={handleInputChange} />
        </div>

        <div className="form-section">
          <label>Person Number:</label>
          <input type="text" name="personNumber" value={formData.personNumber} onChange={handleInputChange} />
        </div>

        <div className="form-section">
          <label>Person Available for Signature:</label>
          <div className="radio-group">
            {['Yes', 'No'].map(option => (
              <label key={option}><input type="radio" name="signatureAvailable" value={option} checked={formData.signatureAvailable === option} onChange={handleInputChange} /> {option}</label>
            ))}
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-submit">Submit</button>
          <button type="button" onClick={handleClear} className="btn-clear">Clear Form</button>
        </div>
      </form>
    </div>
  );
}

export default App;
