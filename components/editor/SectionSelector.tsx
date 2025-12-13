import React, { useState } from 'react';
import { SectionPreferences } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preferences: SectionPreferences;
  onSave: (preferences: SectionPreferences) => void;
}

const defaultSections = [
  { id: 'summary', label: 'Professional Summary', icon: 'edit', description: 'Brief overview of your professional background' },
  { id: 'education', label: 'Education', icon: 'school', description: 'Academic qualifications and degrees' },
  { id: 'skills', label: 'Skills', icon: 'star', description: 'Technical and soft skills' },
  { id: 'experience', label: 'Work Experience', icon: 'work', description: 'Professional work history' },
  { id: 'projects', label: 'Projects', icon: 'rocket_launch', description: 'Portfolio projects and achievements' },
  { id: 'certifications', label: 'Certifications', icon: 'verified', description: 'Professional certifications and licenses' },
  { id: 'languages', label: 'Languages', icon: 'translate', description: 'Languages you speak' },
  { id: 'hobbies', label: 'Hobbies & Interests', icon: 'interests', description: 'Personal hobbies and interests' },
  { id: 'socialLinks', label: 'Social Links', icon: 'share', description: 'LinkedIn, GitHub, portfolio links' },
] as const;

const SectionSelector: React.FC<Props> = ({ isOpen, onClose, preferences, onSave }) => {
  const [localPreferences, setLocalPreferences] = useState<SectionPreferences>(preferences);

  if (!isOpen) return null;

  const handleToggle = (sectionId: keyof SectionPreferences) => {
    setLocalPreferences(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleSelectAll = () => {
    const allEnabled: SectionPreferences = {
      summary: true,
      education: true,
      skills: true,
      experience: true,
      projects: true,
      certifications: true,
      languages: true,
      hobbies: true,
      socialLinks: true,
    };
    setLocalPreferences(allEnabled);
  };

  const handleDeselectAll = () => {
    const allDisabled: SectionPreferences = {
      summary: false,
      education: false,
      skills: false,
      experience: false,
      projects: false,
      certifications: false,
      languages: false,
      hobbies: false,
      socialLinks: false,
    };
    setLocalPreferences(allDisabled);
  };

  const handleSave = () => {
    onSave(localPreferences);
    onClose();
  };

  const handleCancel = () => {
    setLocalPreferences(preferences);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Customize Resume Sections</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Choose which sections to include in your resume</p>
          </div>
          <button onClick={handleCancel} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <MaterialIcon name="close" className="text-[24px]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Required Sections</h3>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                  <MaterialIcon name="check" className="text-white text-[16px]" />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <MaterialIcon name="check_circle" className="text-primary text-[20px]" />
                  <span className="font-medium text-slate-900 dark:text-white">Personal Information</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Always included</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Optional Sections</h3>
            <div className="space-y-2">
              {defaultSections.map((section) => {
                const isEnabled = localPreferences[section.id as keyof SectionPreferences];
                return (
                  <button
                    key={section.id}
                    onClick={() => handleToggle(section.id as keyof SectionPreferences)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isEnabled
                        ? 'border-primary bg-primary bg-opacity-5 dark:bg-opacity-10'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        isEnabled ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isEnabled && <MaterialIcon name="check" className="text-white text-[16px]" />}
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <MaterialIcon name={section.icon} className={`text-[20px] ${isEnabled ? 'text-primary' : 'text-slate-400'}`} />
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 dark:text-white">{section.label}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{section.description}</div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
          <div className="flex gap-2">
            <button onClick={handleSelectAll} className="px-3 py-2 text-sm font-medium text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg transition-colors">
              Select All
            </button>
            <button onClick={handleDeselectAll} className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
              Deselect All
            </button>
          </div>
          <div className="flex gap-3">
            <button onClick={handleCancel} className="px-6 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
              Cancel
            </button>
            <button onClick={handleSave} className="px-6 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
              Save & Continue
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSelector;
