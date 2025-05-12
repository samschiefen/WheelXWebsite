import React, { useState } from 'react';
import '../../styles/stylesheet.css';

export default function WorkflowSettingsForm() {
  const [stages, setStages] = useState([
    'Draft', 'Requested', 'Accepted', 'In-transit', 'Delivered', 'Verified', 'Paid'
  ]);
  const [newStage, setNewStage] = useState('');

  const handleRemove = (stageToRemove) => {
    setStages(prev => prev.filter(stage => stage !== stageToRemove));
  };

  const handleAddStage = () => {
    const trimmed = newStage.trim();
    if (trimmed && !stages.includes(trimmed)) {
      setStages(prev => [...prev, trimmed]);
      setNewStage('');
    }
  };

  return (
    <form method="POST" action="" id="workflowSettingsForm" className="settingsPage">
      <div id="workflowSettingsDiv" className="settingsDiv">
        <div id="existingStages" className="List">
          <h3>Current Workflow Stages:</h3>
          <ol id="stagesList">
            {stages.map((stage, idx) => (
              <li key={idx} style={{ display: "flex", justifyContent: "space-between"}}>
                {stage}
                <button type="button" className="remove" onClick={() => handleRemove(stage)} style={{ marginRight: "10px"}}>
                  Remove
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div id="addStage">
          <h3>Add New Stage:</h3>
          <label htmlFor="stageName">Stage Name: </label>
          <input
            type="text"
            id="stageName"
            name="stageName"
            value={newStage}
            onChange={(e) => setNewStage(e.target.value)}
          />
          <div>
            <button type="button" onClick={handleAddStage} className="saveButtons">
              Add Stage
            </button>
          </div>
        </div>
      </div>

      <div className="saveButtons">
        <input type="reset" value="Cancel" />
        <input type="submit" value="Save Changes" />
      </div>
    </form>
  );
}
