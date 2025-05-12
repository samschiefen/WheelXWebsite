import React from 'react';
import { useEffect, useState } from 'react';
import '../../styles/stylesheet.css';

export default function NameLogoForm() {
  const [logo, setLogo] = useState('/images/logo_placeholder.png');
  const [appName, setAppName] = useState('WheelXInc');
  const [newLogo, setNewLogo] = useState(null); // To store new logo file
  const [newAppName, setNewAppName] = useState('WheelXInc');

  // Fetch current logo and app name
  useEffect(() => {
    // Filler data for app name and logo (instead of fetching from backend)
    const mockLogo = '/images/logo_placeholder.png'; 
    const mockAppName = 'Recycling App';

    setLogo(mockLogo); 
    setAppName(mockAppName); 
    setNewAppName(mockAppName);
  }, []);

  const handleLogoChange = (e) => {
    // Handle the logo file input change
    const file = e.target.files[0];
    if (file) {
      setNewLogo(file);
      // Optionally, you can display the image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAppNameChange = (e) => {
    setNewAppName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Normally, I'd send this data to the server, but for now, I'll log the data.
    const formData = new FormData();
    if (newLogo) formData.append('logo', newLogo);
    if (newAppName) formData.append('appName', newAppName);

    try {
      // Simulate a successful form submission
      console.log('Form submitted with data:', { logo: newLogo, appName: newAppName });

      // Simulating the server response after submission
      const updatedSettings = {
        logo: newLogo ? URL.createObjectURL(newLogo) : logo, // If new logo is provided, use that, otherwise fallback to the default
        appName: newAppName,
      };

      // Update the state to reflect the new values
      setLogo(updatedSettings.logo);
      setAppName(updatedSettings.appName);

      console.log('Settings updated successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form method="POST" action="" encType="multipart/form-data" id="nameLogoForm" className="settingsPage" onSubmit={handleSubmit}>
      <div id="logoPic">
        <img id="settingsLogo" src={logo || '/images/logo_placeholder.png'} alt="logo" className="logoImage" />
        <input type="file" name="logo" onChange={handleLogoChange} />
      </div>

      <div id="appNameDiv" className="settingsDiv">
        <label htmlFor="appName">App Name</label>
        <input
          type="text"
          name="appName"
          id="appName"
          value={newAppName}
          onChange={handleAppNameChange}
          placeholder="App Name"
        />
      </div>

      <div className="saveButtons">
        <input type="reset" value="Cancel" />
        <input type="submit" value="Save Changes" />
      </div>
    </form>
  );
}
