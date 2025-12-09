import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const EducationForm: React.FC<Props> = ({ data, update }) => {
  const add = () => update({ education: [...data.education, { id: Date.now().toString(), school: '', degree: '', location: '', startDate: '', endDate: '', grade: '' }] });
  const remove = (id: string) => update({ education: data.education.filter(e => e.id !== id) });
  const change = (id: string, field: string, val: string) => update({ education: data.education.map(e => e.id === id ? { ...e, [field]: val } : e) });

  return (
    <div className="space-y-6">
      {data.education.map((edu, idx) => (
        <div key={edu.id} className="p-5 border border-slate-200 rounded-xl bg-slate-50 relative group transition-all hover:shadow-sm">
          <button onClick={() => remove(edu.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><MaterialIcon name="delete" /></button>
          <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Education #{idx + 1}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="School / University" className="form-input rounded-lg border-slate-300" value={edu.school} onChange={e => change(edu.id, 'school', e.target.value)} />
            <input placeholder="Degree" className="form-input rounded-lg border-slate-300" value={edu.degree} onChange={e => change(edu.id, 'degree', e.target.value)} />
            <div className="grid grid-cols-2 gap-2">
                <input placeholder="Start Year" className="form-input rounded-lg border-slate-300" value={edu.startDate} onChange={e => change(edu.id, 'startDate', e.target.value)} />
                <input placeholder="End Year" className="form-input rounded-lg border-slate-300" value={edu.endDate} onChange={e => change(edu.id, 'endDate', e.target.value)} />
            </div>
            <input placeholder="CGPA / Grade" className="form-input rounded-lg border-slate-300" value={edu.grade} onChange={e => change(edu.id, 'grade', e.target.value)} />
          </div>
        </div>
      ))}
      <button onClick={add} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-primary hover:text-primary transition-colors font-semibold flex items-center justify-center gap-2">
        <MaterialIcon name="add" /> Add Education
      </button>
    </div>
  );
};

export default EducationForm;