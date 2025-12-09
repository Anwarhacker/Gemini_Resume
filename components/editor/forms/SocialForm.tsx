import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const SocialForm: React.FC<Props> = ({ data, update }) => {
    const add = () => update({ socialLinks: [...data.socialLinks, { id: Date.now().toString(), platform: 'LinkedIn', url: '' }] });
    const remove = (id: string) => update({ socialLinks: data.socialLinks.filter(s => s.id !== id) });
    const change = (id: string, field: string, val: string) => update({ socialLinks: data.socialLinks.map(s => s.id === id ? { ...s, [field]: val } : s) });

    return (
        <div className="space-y-4 p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
            {data.socialLinks.map((link) => (
                <div key={link.id} className="flex gap-4 items-center">
                    <select className="form-select w-32 rounded-lg border-slate-300" value={link.platform} onChange={e => change(link.id, 'platform', e.target.value)}>
                        <option>LinkedIn</option>
                        <option>GitHub</option>
                        <option>Portfolio</option>
                        <option>Twitter</option>
                        <option>Behance</option>
                        <option>Other</option>
                    </select>
                    <input placeholder="URL" className="form-input flex-1 rounded-lg border-slate-300" value={link.url} onChange={e => change(link.id, 'url', e.target.value)} />
                    <button onClick={() => remove(link.id)} className="text-slate-400 hover:text-red-500"><MaterialIcon name="delete" /></button>
                </div>
            ))}
             <button onClick={add} className="text-primary font-bold text-sm flex items-center gap-2 mt-2"><MaterialIcon name="add" className="text-[18px]" /> Add Social Link</button>
        </div>
    );
};

export default SocialForm;