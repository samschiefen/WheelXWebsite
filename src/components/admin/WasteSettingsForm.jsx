import React, { useState } from 'react';
import '../../styles/stylesheet.css';

export default function WasteSettingsForm() {
  const [wasteTypes, setWasteTypes] = useState(['Plastic', 'Glass Bottles', 'Aluminum Cans']);
  const [volumes, setVolumes] = useState(['Milliliters (ml)', 'Centiliters (cl)', 'Liters (l)']);
  const [sizes, setSizes] = useState(['Less than 1 Liter', '1 to 2 Liters', 'Greater than 2 Liters']);
  const [weights, setWeights] = useState(['Pounds (lb)', 'Kilograms (kg)']);

  const [newWasteType, setNewWasteType] = useState('');
  const [newVolume, setNewVolume] = useState('');
  const [newSize, setNewSize] = useState('');
  const [newWeight, setNewWeight] = useState('');

  const handleAdd = (listSetter, newValue, resetFn) => {
    if (newValue.trim() !== '') {
      listSetter(prev => [...prev, newValue.trim()]);
      resetFn('');
    }
  };

  const handleRemove = (listSetter, index) => {
    listSetter(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <form method="POST" id="wasteSettingsForm" className="settingsPage">
      <div id="wasteSettingsDiv" className="settingsDiv">

        {/* WASTE TYPES */}
        <div className="List">
          <h3>Waste Types:</h3>
          <ul>
            {wasteTypes.map((type, i) => (
              <li key={i} style={{ display: "flex", justifyContent: "space-between"}}>
                {type}
                <button type="button" className="remove" onClick={() => handleRemove(setWasteTypes, i)} style={{ marginRight: "10px"}}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newWasteType}
            placeholder="Add New Waste Type"
            onChange={e => setNewWasteType(e.target.value)}
          />
          <button type="button" onClick={() => handleAdd(setWasteTypes, newWasteType, setNewWasteType)}>Add Waste Type</button>
        </div>

        {/* VOLUMES */}
        <div className="List">
          <h3>Volumes:</h3>
          <ul>
            {volumes.map((vol, i) => (
              <li key={i} style={{ display: "flex", justifyContent: "space-between"}}>
                {vol}
                <button type="button" className="remove" onClick={() => handleRemove(setVolumes, i)} style={{ marginRight: "10px"}}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newVolume}
            placeholder="Add New Volume"
            onChange={e => setNewVolume(e.target.value)}
          />
          <button type="button" onClick={() => handleAdd(setVolumes, newVolume, setNewVolume)}>Add Volume</button>
        </div>

        {/* SIZES */}
        <div className="List">
          <h3>Sizes:</h3>
          <ul>
            {sizes.map((size, i) => (
              <li key={i} style={{ display: "flex", justifyContent: "space-between"}}>
                {size}
                <button type="button" className="remove" onClick={() => handleRemove(setSizes, i)} style={{ marginRight: "10px"}}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newSize}
            placeholder="Add New Size"
            onChange={e => setNewSize(e.target.value)}
          />
          <button type="button" onClick={() => handleAdd(setSizes, newSize, setNewSize)}>Add Size</button>
        </div>

        {/* WEIGHTS */}
        <div className="List">
          <h3>Weights:</h3>
          <ul>
            {weights.map((w, i) => (
              <li key={i} style={{ display: "flex", justifyContent: "space-between"}}>
                {w}
                <button type="button" className="remove" onClick={() => handleRemove(setWeights, i)} style={{ marginRight: "10px"}}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newWeight}
            placeholder="Add New Weight"
            onChange={e => setNewWeight(e.target.value)}
          />
          <button type="button" onClick={() => handleAdd(setWeights, newWeight, setNewWeight)}>Add Weight</button>
        </div>

      </div>

      <div className="saveButtons">
        <input type="reset" value="Cancel" />
        <input type="submit" value="Save Changes" />
      </div>
    </form>
  );
}
