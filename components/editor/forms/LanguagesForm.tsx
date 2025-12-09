import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const LanguagesForm: React.FC<Props> = ({ data, update }) => {
    const add = () => update({ languages: [...data.languages, { id: Date.now().toString(), name: '', proficiency: 'Professional' }] });
    const remove = (id: string) => update({ languages: data.languages.filter(l => l.id !== id) });
    const change = (id: string, field: string, val: string) => update({ languages: data.languages.map(l => l.id === id ? { ...l, [field]: val } : l) });

    return (
        <div className="space-y-4">
            {data.languages.map((lang) => (
                <div key={lang.id} className="flex gap-4 items-center">
                    <input placeholder="Language" className="form-input flex-1 rounded-lg border-slate-300" value={lang.name} onChange={e => change(lang.id, 'name', e.target.value)} />
                    <select className="form-select rounded-lg border-slate-300" value={lang.proficiency} onChange={e => change(lang.id, 'proficiency', e.target.value)}>
                        <option>Basic</option>
                        <option>Conversational</option>
                        <option>Professional</option>
                        <option>Native</option>
                    </select>
                    <button onClick={() => remove(lang.id)} className="text-slate-400 hover:text-red-500"><MaterialIcon name="delete" /></button>
                </div>
            ))}
            <button onClick={add} className="text-primary font-bold text-sm flex items-center gap-2 mt-2"><MaterialIcon name="add" className="text-[18px]" /> Add Language</button>
        </div>
    );
};

export default LanguagesForm;