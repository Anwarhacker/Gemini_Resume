import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const HobbiesForm: React.FC<Props> = ({ data, update }) => {
    const hobbies = data.hobbies || [];
    
    const add = () => update({ hobbies: [...hobbies, { id: Date.now().toString(), name: '' }] });
    const remove = (id: string) => update({ hobbies: hobbies.filter(h => h.id !== id) });
    const change = (id: string, val: string) => update({ hobbies: hobbies.map(h => h.id === id ? { ...h, name: val } : h) });

    return (
        <div className="space-y-4 p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
            {hobbies.map((hobby) => (
                <div key={hobby.id} className="flex gap-4 items-center">
                    <input 
                        placeholder="e.g., Photography, Hiking, Reading" 
                        className="form-input flex-1 rounded-lg border-slate-300" 
                        value={hobby.name} 
                        onChange={e => change(hobby.id, e.target.value)} 
                    />
                    <button onClick={() => remove(hobby.id)} className="text-slate-400 hover:text-red-500"><MaterialIcon name="delete" /></button>
                </div>
            ))}
            <button onClick={add} className="text-primary font-bold text-sm flex items-center gap-2 mt-2"><MaterialIcon name="add" className="text-[18px]" /> Add Hobby</button>
        </div>
    );
};

export default HobbiesForm;

