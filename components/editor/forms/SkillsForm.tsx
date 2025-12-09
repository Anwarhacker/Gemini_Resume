import React, { useState } from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const SkillsForm: React.FC<Props> = ({ data, update }) => {
  const [val, setVal] = useState('');
  const add = () => { if(val) { update({ skills: [...data.skills, { id: Date.now().toString(), name: val, level: 'Intermediate', type: 'Technical' }] }); setVal(''); }};
  const remove = (id: string) => update({ skills: data.skills.filter(s => s.id !== id) });
  
  return (
    <div className="space-y-6">
       <div className="flex gap-2">
         <input 
            className="form-input flex-1 rounded-lg border-slate-300" 
            placeholder="Add a skill (e.g. Python, Leadership)" 
            value={val} 
            onChange={e => setVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && add()} 
         />
         <button onClick={add} className="px-6 bg-primary text-white rounded-lg font-bold">Add</button>
       </div>
       <div className="flex flex-wrap gap-3">
         {data.skills.map(skill => (
           <div key={skill.id} className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-sm">
             <span className="font-medium text-slate-700">{skill.name}</span>
             <button onClick={() => remove(skill.id)} className="text-slate-400 hover:text-red-500"><MaterialIcon name="close" className="text-[18px]" /></button>
           </div>
         ))}
       </div>
    </div>
  );
};

export default SkillsForm;