import React from 'react';
import { useEffect, useState } from 'react';
import '../../styles/stylesheet.css';

export default function NameLogoForm() {
  const [logo, setLogo] = useState('/images/logo_placeholder.png');
  const [appName, setAppName] = useState('');
  const [newLogo, setNewLogo] = useState(null); // To store new logo file
  const [newAppName, setNewAppName] = useState('');

  // Fetch current logo and app name from backend when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/getLogoName')
      .then(res => res.json())
      .then(data => {
        setLogo(data.logo); // Set the current logo from the backend
        setAppName(data.appName); // Set the current app name from the backend
        setNewAppName(data.appName); // Initialize editable field
      })
      .catch(err => console.error('Error fetching app settings:', err));
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

    const formData = new FormData();
    if (newLogo) formData.append('logo', newLogo);
    if (newAppName) formData.append('appName', newAppName);

    try {
      const response = await fetch('http://localhost:5000/updateLogoName', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // If the update is successful, update the state with the new values
        const updatedSettings = await response.json();
        setLogo(updatedSettings.logo); // Update logo with the new one
        setAppName(updatedSettings.appName); // Update app name with the new one
        console.log('Settings updated successfully!');
      } else {
        console.log('Error updating settings!');
      }
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
