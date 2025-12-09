import React from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const CertificationsForm: React.FC<Props> = ({ data, update }) => {
    const add = () => update({ certifications: [...data.certifications, { id: Date.now().toString(), name: '', issuer: '', year: '', url: '' }] });
    const remove = (id: string) => update({ certifications: data.certifications.filter(c => c.id !== id) });
    const change = (id: string, field: string, val: string) => update({ certifications: data.certifications.map(c => c.id === id ? { ...c, [field]: val } : c) });

    return (
        <div className="space-y-6">
            {data.certifications.map((cert, idx) => (
                <div key={cert.id} className="p-5 border border-slate-200 rounded-xl bg-slate-50 relative group">
                    <button onClick={() => remove(cert.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><MaterialIcon name="delete" /></button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input placeholder="Certification Name" className="form-input rounded-lg border-slate-300" value={cert.name} onChange={e => change(cert.id, 'name', e.target.value)} />
                        <input placeholder="Issued By" className="form-input rounded-lg border-slate-300" value={cert.issuer} onChange={e => change(cert.id, 'issuer', e.target.value)} />
                        <input placeholder="Year" className="form-input rounded-lg border-slate-300" value={cert.year} onChange={e => change(cert.id, 'year', e.target.value)} />
                        <input placeholder="Credential URL" className="form-input rounded-lg border-slate-300" value={cert.url} onChange={e => change(cert.id, 'url', e.target.value)} />
                    </div>
                </div>
            ))}
             <button onClick={add} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-primary hover:text-primary transition-colors font-semibold flex items-center justify-center gap-2">
                <MaterialIcon name="add" /> Add Certification
            </button>
        </div>
    );
};

export default CertificationsForm;