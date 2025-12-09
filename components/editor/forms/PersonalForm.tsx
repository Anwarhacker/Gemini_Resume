import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';
import { FormInput } from '../../common/FormElements';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const PersonalForm: React.FC<Props> = ({ data, update }) => {
  const handleChange = (field: keyof typeof data.personalInfo, value: string) => {
    update({ personalInfo: { ...data.personalInfo, [field]: value } });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
         <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-300 hover:border-primary transition-colors">
               {data.personalInfo.photoUrl ? (
                 <img src={data.personalInfo.photoUrl} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                 <MaterialIcon name="add_a_photo" className="text-slate-400" />
               )}
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full shadow-sm">
               <MaterialIcon name="edit" className="text-[14px]" />
            </div>
         </div>
         <div>
           <h3 className="text-lg font-bold text-slate-800">Profile Photo</h3>
           <p className="text-slate-500 text-sm">Upload a professional picture (Optional)</p>
         </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
        <FormInput 
          label="Full Name" 
          placeholder="e.g. John Doe"
          value={data.personalInfo.fullName} 
          onChange={e => handleChange('fullName', e.target.value)} 
        />
        <FormInput 
          label="Job Title" 
          placeholder="e.g. Product Manager"
          value={data.personalInfo.jobTitle} 
          onChange={e => handleChange('jobTitle', e.target.value)} 
        />
        <FormInput 
          label="Email Address" 
          type="email"
          placeholder="john@example.com"
          value={data.personalInfo.email} 
          onChange={e => handleChange('email', e.target.value)} 
        />
        <FormInput 
          label="Phone Number" 
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={data.personalInfo.phone} 
          onChange={e => handleChange('phone', e.target.value)} 
        />
        <FormInput 
          label="City" 
          placeholder="New York"
          value={data.personalInfo.city} 
          onChange={e => handleChange('city', e.target.value)} 
        />
        <FormInput 
          label="Country" 
          placeholder="USA"
          value={data.personalInfo.country} 
          onChange={e => handleChange('country', e.target.value)} 
        />
      </div>
    </div>
  );
};

export default PersonalForm;
