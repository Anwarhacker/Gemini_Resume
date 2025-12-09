import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';
import { FormInput, FormTextArea, FormCheckbox } from '../../common/FormElements';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const ExperienceForm: React.FC<Props> = ({ data, update }) => {
    const add = () => update({ experience: [...data.experience, { id: Date.now().toString(), company: '', position: '', location: '', startDate: '', endDate: '', current: false, description: '' }] });
    const remove = (id: string) => update({ experience: data.experience.filter(e => e.id !== id) });
    const change = (id: string, field: string, val: any) => update({ experience: data.experience.map(e => e.id === id ? { ...e, [field]: val } : e) });
  
    return (
      <div className="space-y-6">
        {data.experience.map((exp, idx) => (
          <div key={exp.id} className="p-5 border border-slate-200 rounded-xl bg-slate-50 relative group">
            <button onClick={() => remove(exp.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><MaterialIcon name="delete" /></button>
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Work History #{idx + 1}</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormInput 
                label="Company Name" 
                value={exp.company} 
                onChange={e => change(exp.id, 'company', e.target.value)} 
              />
              <FormInput 
                label="Job Title" 
                value={exp.position} 
                onChange={e => change(exp.id, 'position', e.target.value)} 
              />
              <FormInput 
                label="Start Date" 
                placeholder="MM/YYYY"
                value={exp.startDate} 
                onChange={e => change(exp.id, 'startDate', e.target.value)} 
              />
              <div className="flex flex-col gap-1.5">
                 <FormInput 
                   label="End Date" 
                   placeholder={exp.current ? "Present" : "MM/YYYY"}
                   disabled={exp.current} 
                   className={exp.current ? "bg-slate-200 text-slate-400" : ""}
                   value={exp.endDate} 
                   onChange={e => change(exp.id, 'endDate', e.target.value)} 
                 />
                 <div className="mt-1">
                   <FormCheckbox 
                      label="I currently work here" 
                      checked={exp.current} 
                      onChange={e => change(exp.id, 'current', e.target.checked)} 
                   />
                 </div>
              </div>
            </div>
            
            <FormTextArea 
               label="Job Responsibilities"
               placeholder="Describe your key responsibilities and achievements. Use the STAR method for best results."
               value={exp.description} 
               onChange={e => change(exp.id, 'description', e.target.value)} 
            />
          </div>
        ))}
        <button onClick={add} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-primary hover:text-primary transition-colors font-semibold flex items-center justify-center gap-2">
          <MaterialIcon name="add" /> Add Experience
        </button>
      </div>
    );
};

export default ExperienceForm;
