import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const ProjectsForm: React.FC<Props> = ({ data, update }) => {
    const add = () => update({ projects: [...data.projects, { id: Date.now().toString(), name: '', description: '', link: '', technologies: '' }] });
    const remove = (id: string) => update({ projects: data.projects.filter(p => p.id !== id) });
    const change = (id: string, field: string, val: string) => update({ projects: data.projects.map(p => p.id === id ? { ...p, [field]: val } : p) });
    
    return (
        <div className="space-y-6 p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
            {data.projects.map((proj, idx) => (
                <div key={proj.id} className="p-5 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 relative group">
                    <button onClick={() => remove(proj.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><MaterialIcon name="delete" /></button>
                    <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 mb-3 tracking-wider">Project #{idx + 1}</h4>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <input placeholder="Project Title" className="form-input rounded-lg border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white p-2 focus:ring-primary focus:border-primary dark:focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-500" value={proj.name} onChange={e => change(proj.id, 'name', e.target.value)} />
                        <input placeholder="Tech Stack (e.g. React, Node.js)" className="form-input rounded-lg border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white p-2 focus:ring-primary focus:border-primary dark:focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-500" value={proj.technologies} onChange={e => change(proj.id, 'technologies', e.target.value)} />
                        <input placeholder="Project Link / GitHub" className="form-input rounded-lg border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white p-2 focus:ring-primary focus:border-primary dark:focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-500" value={proj.link} onChange={e => change(proj.id, 'link', e.target.value)} />
                    </div>
                    <textarea placeholder="Project Description" className="form-textarea w-full rounded-lg border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white p-2 focus:ring-primary focus:border-primary dark:focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-500 h-24" value={proj.description} onChange={e => change(proj.id, 'description', e.target.value)} />
                </div>
            ))}
            <button onClick={add} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-primary hover:text-primary transition-colors font-semibold flex items-center justify-center gap-2">
                <MaterialIcon name="add" /> Add Project
            </button>
        </div>
    );
};

export default ProjectsForm;