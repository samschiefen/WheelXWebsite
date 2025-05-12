import React from 'react';
import '../../styles/stylesheet.css';

export default function RolesPermissionsForm() {
  return (
    <form method="POST" action="" id="rolesPermissionsForm" className="settingsPage">
      <div id="rolesPermissionsSettings" className="settingsDiv">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Create</th>
              <th>Read</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td><input type="checkbox" id="admincreate" name="admincreate" defaultChecked /></td>
              <td><input type="checkbox" id="adminread" name="adminread" defaultChecked /></td>
              <td><input type="checkbox" id="adminupdate" name="adminupdate" defaultChecked /></td>
              <td className="last-cell"><input type="checkbox" id="admindelete" name="admindelete" defaultChecked /></td>
            </tr>
            <tr>
              <td>Users</td>
              <td><input type="checkbox" id="userscreate" name="userscreate" /></td>
              <td><input type="checkbox" id="usersread" name="usersread" defaultChecked /></td>
              <td><input type="checkbox" id="usersupdate" name="usersupdate" /></td>
              <td className="last-cell"><input type="checkbox" id="usersdelete" name="usersdelete" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="saveButtons">
        <input type="reset" value="Cancel" />
        <input type="submit" value="Save Changes" />
      </div>
    </form>
  );
}
