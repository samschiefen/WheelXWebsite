import React from 'react';
import { useState } from 'react';
import Header from '../components/admin/AdminHeader';
import NameLogoForm from '../components/admin/NameLogoForm';
import RolesPermissionsForm from '../components/admin/RolesPermissionsForm';
import WasteSettingsForm from '../components/admin/WasteSettingsForm';
import PriceSettingsForm from '../components/admin/PriceSettingsForm';
import WorkflowSettingsForm from '../components/admin/WorkflowSettingsForm';
import PayMethodsForm from '../components/admin/PayMethodsForm';
import FAQEntryForm from '../components/admin/FAQEntryForm';
import ChangePasswordForm from '../components/admin/ChangePasswordForm';
import DevicesList from '../components/admin/DevicesList';
import '../styles/stylesheet.css';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [activeSection, setActiveSection] = useState('nameLogo');

  const sidebarOptions = {
    general: [
      { id: 'nameLogo', label: 'App Name & Logo', component: <NameLogoForm /> },
      { id: 'rolesPermission', label: 'Roles & Permission', component: <RolesPermissionsForm /> },
      { id: 'wasteSettings', label: 'Waste Settings', component: <WasteSettingsForm /> },
      { id: 'priceSettings', label: 'Price Settings', component: <PriceSettingsForm /> },
      { id: 'workflowSettings', label: 'Workflow Settings', component: <WorkflowSettingsForm /> },
      { id: 'payMethods', label: 'Pay Methods', component: <PayMethodsForm /> },
      { id: 'FAQ', label: 'FAQ', component: <FAQEntryForm /> },
    ],
    security: [
      { id: 'changePassword', label: 'Password', component: <ChangePasswordForm /> },
      { id: 'devicesList', label: 'Devices', component: <DevicesList /> },
    ]
  };

  const currentSidebar = sidebarOptions[activeTab];
  const currentForm = currentSidebar.find(option => option.id === activeSection)?.component;

  return (
    <>
      <Header />
      <section id="adminSettings" className="page">
        <article>
          <nav>
            <button
              className={activeTab === 'general' ? 'clicked' : ''}
              onClick={() => {
                setActiveTab('general');
                setActiveSection(sidebarOptions.general[0].id);
              }} >
              General
            </button>
            <button
              className={activeTab === 'security' ? 'clicked' : ''}
              onClick={() => {
                setActiveTab('security');
                setActiveSection(sidebarOptions.security[0].id);
              }} >
              Security
            </button>
          </nav>

          {/* Form Panel */}
          <div id="adminSettingsPage">
            <div id ={currentForm.id}>
              {currentForm}
            </div>
          </div>
        </article>
        <aside id="sideSettings">
              {currentSidebar.map(option => (
                <button
                  key={option.id}
                  className={activeSection === option.id ? 'clicked' : ''}
                  onClick={() => setActiveSection(option.id)} >
                  {option.label}
                </button>
              ))}
        </aside>
      </section>
    </>
  );
}
