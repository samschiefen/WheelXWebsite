import React from 'react';
import { useState } from 'react';
import '../../styles/stylesheet.css';

export default function DevicesList() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <>
      <div id="devicesDiv" className="settingsPage settingsDiv">
        <h1>Devices</h1>
        <ul id="devicesList">
          <div className="devices">
            <div>
              <h3>Chrome on Windows 10.0</h3>
              <h6>1 hour ago</h6>
              <p>Gatineau City (Region of Quebec), Canada</p>
            </div>
            <button className="logout">Logout</button>
          </div>
          <div className="devices">
            <div>
              <h3>Chrome on Windows 10.0</h3>
              <h6>45 minutes ago</h6>
              <p>Minneapolis City (Region of Minnesota), United States</p>
            </div>
            <button className="logout">Logout</button>
          </div>
        </ul>
      </div>
    </>
  );
}