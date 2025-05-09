import React from 'react';
import { useState } from 'react';
import '../../styles/stylesheet.css';

export default function ChangePasswordForm() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <>
      <form method="POST" action="" id="changePasswordForm" class="settingsPage">
          <div id="changePassword" class="settingsDiv">
            <h1>Password</h1>
            <h6>Change Password</h6>
            <label for="currentPassword">Current Password:</label>
            <input type="password" id="currentPassword" name="currentPassword" required="" />
            <label for="newPassword">New Password:</label>
            <input type="password" id="newPassword" name="newPassword" required="" />
            <label for="confirmNewPassword">Confirm New Password:</label>
            <input type="password" id="confirmNewPassword" name="confirmNewPassword" required="" />
          </div>
          <div class="saveButtons">
            <input type="reset" value="Cancel" />
            <input type="submit" value="Save Changes" />
          </div>
      </form>
      
    </>
  );
}